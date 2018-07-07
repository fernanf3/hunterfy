import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-ripple/paper-ripple';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-styles/color';
import '@polymer/paper-styles/default-theme';
import '@polymer/paper-styles/shadow';
import '@polymer/paper-styles/typography';
import moment from 'moment';
import '../calendar-icons.js';
import './index.css';

moment.locale('es');

// Ignore movement within this distance (px)
const WIGGLE_THRESHOLD = 4;
const WIGGLE_THRESHOLD_SQUARE = WIGGLE_THRESHOLD * WIGGLE_THRESHOLD;

// what constitues a flick (px/ms)
const FLICK_SPEED = 0.5;

// Factor for "springy" resistence effect when swiping too far.
const RESIST_LENGTH = 40;
const RESIST_FACTOR = 2;

// Number of months to preload on both sides of the current month
const PRELOAD_MONTHS = 1;

function dateDiff(a, b) {
  a = new Date(a.getTime());
  b = new Date(b.getTime());
  a.setHours(0, 0, 0, 0);
  b.setHours(0, 0, 0, 0);
  return (a.getTime() - b.getTime()) / 86400000;
}
class PaperCalendar extends mixinBehaviors([IronResizableBehavior], PolymerElement) {
  static get template(){
    return html`
      <style include="style-element-calendar"></style>
      <div id="calendar">
        <div id="months" on-track="_onTrack" class$="{{_contentClass}}">
          <template is="dom-repeat" items="{{_months}}" as="month">
            <div class$="{{_getMonthClass('month', month)}}">
              <div class="month-row month-name">
                <span>{{dateFormat(month.date, 'MMMM YYYY', locale)}}</span>
              </div>
              <div class="month-row month-weekdays week">
                <template is="dom-repeat" items="{{_weekdays}}">
                  <div class="month-col layout vertical flex">
                    <div class="day">{{item.0}}</div>
                  </div>
                </template>
              </div>
              <template is="dom-repeat" items="{{month.weeks}}" as="row">
                <div class="month-row month-days">
                  <template is="dom-repeat" items="{{row}}">
                    <div class="month-col">
                      <div class$="{{_getDayClass('day-item selection', item.date, today, date)}}"
                        disabled$="{{_isDisabled(item.day, item.date, minDate, maxDate)}}"
                        on-tap="_tapDay" date$="{{item.name}}">
                        <div class="day">{{item.day}}</div>
                      </div>
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </template>
        </div>
        <div id="monthNav" class="month-nav">
          <template is="dom-if" if="[[ disabled ]]">
            <div class="flex col self-stretch">
              <div class="btn" on-tap="_swipePrevMonth">
                <paper-ripple center class="ripple circle"></paper-ripple>
                <iron-icon class="icon flex" icon="date-picker:chevron-left"></iron-icon>
              </div>
            </div>
          </template>
          <div class="flex-5"></div>
          <div class="flex col self-stretch">
            <div class="btn" on-tap="_swipeNextMonth">
              <paper-ripple center class="ripple circle"></paper-ripple>
              <iron-icon class="icon flex" icon="date-picker:chevron-right"></iron-icon>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  ready(){
    super.ready();

    this._resizeHandler = this._resizeHandler.bind(this);
    this._onSwipe= this._onSwipe.bind(this);
    this._updateToday();
    this.currentMonth = this.date.getMonth() + 1;
    this.currentYear = this.date.getFullYear();
    this._transitionEvent = this._whichTransitionEnd();
  }
  static get properties(){
    return {
      date: {
        type: Date,
        notify: true,
        value() {
          var d = new Date();
          d.setHours(0, 0, 0, 0);
          return d;
        },
        observer: '_dateChanged'
      },
      nowDate: {
        type: Date,
        value: new Date()
      },
      disabled: {
        type: Boolean,
        value: false
      },
      locale: {
        type: String,
        value: 'en',
        notify: true,
        observer: '_localeChanged'
      },
      minDate: {
        type: Date,
        value: null
      },
      maxDate: {
        type: Date,
        value: null
      },
      currentMonth: {
        type: Number
      },
      currentYear: {
        type: Number
      },
      _contentClass: String,
      _months: Array,
      _firstDayOfWeek: Number
    }
  }
  static get observers() {
    return [
      '_populate(currentYear, currentMonth, minDate, maxDate, locale)'
    ]
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('iron-resize', this._resizeHandler);
    this.addEventListener('swiped', this._onSwipe);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('iron-resize', this._resizeHandler);
    this.removeEventListener('swiped', this._onSwipe);
  }
  // _validActionPrev(){
  //   let today = moment().month(),
  //       date  = moment(this.nowDate).month();

  //   console.log(this.disabled, today, date)
  //   return this.set('disabled', today === date ? false : date > today ? true : false);
  // }
  dateFormat(date, format, locale) {
    if (!date) {
      return '';
    }
    var value = moment(date);
    value.locale(locale || this.locale);
    return value.format(format);
  }
  _localeChanged(locale) {
    var localeMoment = moment();
    localeMoment.locale(locale);
    var weekdays = [];
    for (var i = 0; i < 7; i++) {
      weekdays.push(localeMoment.weekday(i).format('dd'));
    }
    this._weekdays = weekdays;
    this._firstDayOfWeek = localeMoment.weekday(0).format('d');
  }
  _populate(currentYear, currentMonth, minDate, maxDate) {
    var date, month, weeks, day, d, dayInfo, monthData, months = [];

    // Make sure currentYear/currentMonth are in min/max range
    if (minDate && new Date(currentYear, currentMonth, 0) < minDate) {
      this.currentYear = minDate.getFullYear();
      this.currentMonth = minDate.getMonth() + 1;
      return;
    } else if (maxDate && new Date(currentYear, currentMonth - 1, 1) > maxDate) {
      this.currentYear = maxDate.getFullYear();
      this.currentMonth = maxDate.getMonth() + 1;
      return;
    }

    for (var i = -PRELOAD_MONTHS; i <= PRELOAD_MONTHS; i++) {
      weeks = [[]];
      day = 1;
      date = new Date(currentYear, currentMonth - 1 + i, 1);
      month = date.getMonth();
      monthData = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: new Date(date)
      };

      if (!this._monthWithinValidRange(monthData.year, monthData.month)) {
        continue;
      }

      // add "padding" days
      var firstDay = date.getDay() - this._firstDayOfWeek;
      if (firstDay < 0) {
        firstDay = 7 + firstDay;
      }
      for (d = 0; d < firstDay; d++) {
        weeks[0].push({day: null, date: null});
      }

      // add actual days
      while (date.getMonth() === month) {
        if (weeks[0].length && d % 7 === 0) {
          // start new week
          weeks.push([]);
        }
        dayInfo = {
          date: new Date(date.getFullYear(), month, day),
          name: this.dateFormat(date, 'YYYY-MM-DD'),
          year: currentYear,
          month: month,
          day: day,
        };
        weeks[weeks.length - 1].push(dayInfo);
        date.setDate(++day);
        d++;
      }

      // add remaining "padding" days
      while (d < 42) {
        if (d % 7 === 0) {
          weeks.push([]);
        }
        weeks[weeks.length - 1].push({day: null, date: null});
        d += 1;
      }

      monthData.weeks = weeks;
      months.push(monthData);

    }
    if (!months.length) {
      return;
    }
    this.set('_months', months);
    this.async(function () {
      this._updateSelection();
      this._positionSlider();
    });
  }
  _getDayClass(cssClass, date) {
    if (date) {
      if (dateDiff(date, this.today) === 0) {
        cssClass += ' today';
      }
      if (dateDiff(date, this.date) === 0) {
        cssClass += ' selected';
        this.async(function () {
          this._updateSelection();
        });
      }
    }
    return cssClass;
  }
  _isDisabled(day, date) {
    return !day || !this._withinValidRange(date);
  }
  _getMonthClass(name, month) {
    return name + ' month-' + month.year + '-' + month.month;
  }
  _onTrack(event) {
    var dx = event.detail.dx;
    var dy = event.detail.dy;
    var adx = Math.abs(dx);
    var ady = Math.abs(dy);
    var width = this._containerWidth;

    switch (event.detail.state) {
      case 'start':
        this._trackStartTime = (new Date()).getTime();
        this._startPos = this._currentPos;
        this._moveQueue = [];
        break;

      case 'track':
        if (this._moveQueue.length >= 4) {
          this._moveQueue.shift();
        }
        this._moveQueue.push(event);

        // ignore movement within WIGGLE_THRESHOLD
        var distance = (dx * dx) + (dy * dy);
        if (!this._gesture && distance > WIGGLE_THRESHOLD_SQUARE) {
          this._gesture = adx > ady ? 'pan-x' : 'pan-y';
        }

        // only drag during pan-x gesture
        if (this._gesture !== 'pan-x') {
          return;
        }

        this._dragging = true;
        var fullWidth = width * this._months.length;
        var x = this._startPos + dx;

        // If we're dragging outside the bounds, add some resistence
        if (x > 0 || x < (-fullWidth + width)) {
          if (isNaN(parseInt(this._resistStart, 10))) {
            this._resistStart = adx;
          }
          var rdx = adx - this._resistStart;
          var p, d, max = RESIST_LENGTH;
          p = rdx > width ? 1 : rdx / width;
          d = max * (1 - Math.pow(1 - p, RESIST_FACTOR));
          x = (dx < 0 ? -this._scrollWidth + width - d : d);
        } else {
          this._resistStart = null;
        }
        this._translateX(x);
        break;

      case 'end':
        this._resistStart = null;
        var lastIdx = this._getMonthIdx(this._startPos);
        var idx = this._getMonthIdx(this._currentPos);
        var speed = this._getFastestMovement(event).v;
        var move = idx !== lastIdx || speed > FLICK_SPEED;
        if (!this._resistStart && this._gesture === 'pan-x' && move) {
          if (speed > FLICK_SPEED) {
            // calculate an ideal transition duration based on current speed of swipe
            var remainingDistance = width - adx;
            var newDuration = remainingDistance / speed;
            if (newDuration > 300) {
              newDuration = 300;
            }
            this._transitionDuration = newDuration;
          }

          if (dx > 0) {
            this._swipePrevMonth();
          } else {
            this._swipeNextMonth();
          }
        } else {
          this._translateX(this._startPos, 'reset');
        }
        this._gesture = null;
    }
  }
  _swipePrevMonth() {
    this.fire('swipe-start', {direction: 'right'});
    this._translateX(0, 'swipe', function () {
      this.set('_contentClass', '');
      this.transform('translateX(' + this._startPos + 'px)', this.$.months);
      this.fire('swiped', {direction: 'right'});
    }.bind(this));
    // this.set('nowDate', moment(this.nowDate).subtract(1, 'month'))
    // this._validActionPrev();
  }
  _swipeNextMonth() {
    if (!this.maxDate || this.currentYear < this.maxDate.getFullYear() || this.currentMonth < this.maxDate.getMonth() + 1) {
      this._translateX(-this._containerWidth * 2, 'swipe', function () {
        this.set('_contentClass', '');
        this.transform('translateX(' + this._startPos + 'px)', this.$.months);
        this.fire('swiped', {direction: 'left'});
      }.bind(this));
    }
    // this.set('nowDate', moment(this.nowDate).add(1, 'month'))
    // this._validActionPrev();
  }
  _getMonthIdx(pos) {
    // returns the index for the visible month according to the given position
    var width = this._containerWidth;
    var i = Math.floor((-pos + (width / 2)) / width);
    return i < 0 ? 0 : i;
  }
  _translateX(x, transition, cb) {
    if (isNaN(parseInt(x, 10))) {
      throw new Error('Not a number: ' + x);
    }
    this._currentPos = x;
    if (transition) {
      if (this._transitionDuration) {
        this.$.months.style.transitionDuration = this._transitionDuration + 'ms';
      }
      this._once(this._transitionEvent, function () {
        this.set('_contentClass', '');
        this.$.months.style.transitionDuration = '';
        this._transitionDuration = null;
        this.$.monthNav.style.removeProperty('opacity');
        if (cb) {
          cb();
        }
      }.bind(this), this.$.months);
      this.set('_contentClass', 'animating ' + transition);
      this.$.monthNav.style.removeProperty('opacity');
      // Fixes odd bug in chrome where we lose touch-events after changing opacity
      this._once('touchstart', function () {
      });
    }
    window.requestAnimationFrame(function () {
      if (!transition) {
        var halfWidth = this._containerWidth / 2;
        var dx = Math.abs(this._startPos - x);
        var p = (1 - (dx / halfWidth)) * 100;
        p = (100 - Math.pow(p, 2)) / 100 / 100;
        var opacity = Math.abs(parseFloat(p).toFixed(2));
        this.$.monthNav.style.opacity = opacity;
      }
      this.transform('translateX(' + x + 'px)', this.$.months);
    }.bind(this));
  }
  _getFastestMovement(event) {
    // detect flick based on fastest segment of movement
    var l = this._moveQueue.length;
    var dt, tx, ty, tv2, x = 0, y = 0, v2 = 0;
    for (var i = 0, m; i < l && (m = this._moveQueue[i]); i++) {
      dt = event.timeStamp - m.timeStamp;
      tx = (event.detail.x - m.detail.x) / dt;
      ty = (event.detail.y - m.detail.y) / dt;
      tv2 = tx * tx + ty * ty;
      if (tv2 > v2) {
        x = tx;
        y = ty;
        v2 = tv2;
      }
    }
    return {x: x, y: y, v: Math.sqrt(v2)};
  }
  _onSwipe(event) {
    if (event.detail.direction === 'right') {
      this._prevMonth();
    } else {
      this._nextMonth();
    }
  }
  _once(eventName, callback, node) {
    node = node || this;

    function onceCallback() {
      node.removeEventListener(eventName, onceCallback);
      callback.apply(null, arguments);
    }

    node.addEventListener(eventName, onceCallback);
  }
  _incrMonth(i) {
    var date = new Date(this.currentYear, this.currentMonth - 1 + i);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (this._monthWithinValidRange(year, month)) {
      this.currentYear = year;
      this.currentMonth = month;
    }
  }
  _prevMonth() {
    this._incrMonth(-1);
  }
  _nextMonth() {
    this._incrMonth(1);
  }
  _dateChanged(date, oldValue) {
    if (!this._isValidDate(date)) {
      console.warn('Invalid date: ' + date);
      this.date = date = oldValue;
    }
    if (!this._withinValidRange(date)) {
      console.warn('Date outside of valid range: ' + date);
      if (date.getFullYear() == this.maxDate.getFullYear()) {
        this.date = this.maxDate;
      } else if (date.getFullYear() == this.minDate.getFullYear()) {
        this.date = this.minDate;
      } else {
        this.date = date = oldValue;
      }
    }
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth() + 1;
    // Only trigger a notification if there actually is a difference.
    if (oldValue && date.getTime && oldValue.getTime && date.getTime() === oldValue.getTime()) {
      return;
    }
    this._updateSelection();
  }
  _tapDay(event) {
    if (!this._withinValidRange(event.model.item.date)) {
      return false;
    }
    var item = event.model.item;
    var newDate = new Date(this.date.getTime());
    newDate.setDate(1);
    newDate.setYear(item.year);
    newDate.setMonth(item.month);
    newDate.setDate(item.day);
    this.date = newDate;
  }
  _isValidDate(date) {
    return date && date.getTime && !isNaN(date.getTime());
  }
  _withinValidRange(date) {
    if (this._isValidDate(date)) {
      return (!this.minDate || date >= this.minDate) && (!this.maxDate || date <= this.maxDate);
    }
    return false;
  }
  _monthWithinValidRange(year, month) {
    var monthStart = new Date(year, month - 1, 1);
    var monthEnd = new Date(year, month, 0);
    return this._withinValidRange(monthStart) || this._withinValidRange(monthEnd);
  }
  _positionSlider() {
    if (!this._months || !this._containerWidth) {
      return;
    }
    this._scrollWidth = (this.$.calendar.offsetWidth * this._months.length);
    this.$.months.style.minWidth = this._scrollWidth + 'px';
    var i = ((this.currentYear * 12) + this.currentMonth) -
      ((this._months[0].year * 12) + this._months[0].month);
    this._translateX(-i * this._containerWidth);
  }
  _updateSelection() {
    // Force the day selection circle to maintain a 1:1 ratio
    var selected = this.shadowRoot.querySelector('.day-item.selected');
    if (!selected) {
      return;
    }
    selected.style.height = '';
    selected.style.width = '';
    var w = selected.parentElement.offsetWidth;
    var h = selected.parentElement.offsetHeight;
    selected.style.flex = '';
    window.requestAnimationFrame(function () {
      if (w > 0 && w < h) {
        selected.style.height = w + 'px';
      }
      else if (h > 0) {
        selected.style.width = h + 'px';
      }
    });
  }
  _resizeHandler() {
    this._containerWidth = this.$.calendar.offsetWidth;
    this._positionSlider();
    this._updateSelection();
  }
  _getDayName(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }
  _updateToday() {
    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
  }
  _whichTransitionEnd() {
    var transitions = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd otransitionend',
      'transition': 'transitionend'
    };

    for (var t in transitions) {
      if (this.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }
}

window.customElements.define('paper-calendar', PaperCalendar);