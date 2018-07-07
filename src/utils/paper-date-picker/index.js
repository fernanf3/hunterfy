import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior';
import '@polymer/iron-media-query/iron-media-query';
import '@polymer/iron-selector/iron-selector';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/neon-animation/neon-animated-pages';
import '@polymer/neon-animation/neon-animatable';
import '@polymer/neon-animation/animations/fade-in-animation';
import '@polymer/neon-animation/animations/fade-out-animation';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-ripple/paper-ripple';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-styles/color';
import '@polymer/paper-styles/default-theme';
import '@polymer/paper-styles/shadow';
import '@polymer/paper-styles/typography';
import './paper-calendar';
import './paper-list-year';
import './index.css';

class PaperDatePicker extends mixinBehaviors([IronResizableBehavior], PolymerElement){
  static get template(){
    return html`
      <style include="style-element-date-picker"></style>
      <iron-media-query query="{{_getMediaQuery(forceNarrow, responsiveWidth)}}" query-matches="{{_queryMatches}}"></iron-media-query>
      <div id="datePicker">
        <div id="heading" class$="{{_getHeadingClass('heading-content', _selectedPage)}}">
          <div class="year">{{dateFormat(date, 'YYYY', locale)}}</div>
          <div class="date">
            <template is="dom-repeat" items="{{_splitHeadingDate(date, headingFormat, locale)}}">
              <span>{{item}}</span>
            </template>
          </div>
        </div>
        <neon-animated-pages id="pages" selected="{{_selectedPage}}" attr-for-selected="id"
          entry-animation="fade-in-animation" exit-animation="fade-out-animation"
          on-iron-select="_pageSelected">
          <neon-animatable id="chooseDate">
            <paper-calendar id="calendar" locale="{{locale}}" date="{{date}}"
              min-date="{{minDate}}" max-date="{{maxDate}}">
            </paper-calendar>
          </neon-animatable>
          <neon-animatable id="chooseYear">
            <paper-list-year id="yearList" date="{{date}}" on-tap="_tapHeadingDate" min="[[_minYear]]" max="[[_maxYear]]"></paper-list-year>
          </neon-animatable>
        </neon-animated-pages>
      </div>
    `;
  }
  static get properties(){
    return {
      date: {
        type: Date,
        notify: true
      },
      responsiveWidth: {
        type: String,
        value: '560px'
      },
      locale: {
        type: String,
        value: 'en'
      },
      headingFormat: {
        type: String,
        value: 'ddd, MMM D'
      },
      minDate: {
        type: Date,
        value: null
      },
      maxDate: {
        type: Date,
        value: null
      },
      forceNarrow: {
        type: Boolean,
        value: false
      },
      narrow: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        computed: '_computeNarrow(forceNarrow, _queryMatches)'
      },
      isTouch: {
        type: Boolean,
        value: false,
        readOnly: true,
        reflectToAttribute: true
      },
      _queryMatches: {
        type: Boolean,
        value: false
      },
      headingBreak: {
        type: String,
        value: '[,]'
      },
      _selectedPage: String,
      _maxYear: {
        type: Number,
        computed: '_getFullYear(maxDate)'
      },
      _minYear: {
        type: Number,
        computed: '_getFullYear(minDate)'
      }
    }
  }
  ready(){
    super.ready();

    this._resizeHandler = this._resizeHandler.bind(this);
    this.today = this.$.calendar.today;
    this._setIsTouch('ontouchstart' in window);
    this._selectPage('chooseDate');
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('iron-resize', this._resizeHandler);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('iron-resize', this._resizeHandler);
  }
  dateFormat() {
    return this.$.calendar.dateFormat.apply(this.$.calendar, arguments);
  }
  _tapHeadingDate() {
    if (this.$.pages.selected !== 'chooseDate') {
      this._selectPage('chooseDate');
    } else {
      // tapping the date header while already viewing months brings you back
      // to the selected month
      this.$.calendar.currentMonth = this.date.getMonth() + 1;
      this.$.calendar.currentYear = this.date.getFullYear();
    }
  }
  _tapHeadingYear() {
    if (this.$.pages.selected !== 'chooseYear') {
      this._selectPage('chooseYear');
      this.$.yearList.centerSelected();
    }
  }
  _selectPage(page) {
    this.$.pages.selected = page;
  }
  _getMediaQuery(forceNarrow, responsiveWidth) {
    return '(max-width: ' + (forceNarrow ? '' : responsiveWidth) + ')';
  }
  _getHeadingClass(pfx, selectedPage) {
    return pfx + ' pg-' + selectedPage;
  }
  _getFullYear(date) {
    return date ? new Date(date).getFullYear() : null;
  }
  _splitHeadingDate(date, format, locale) {
    var re = new RegExp(this.headingBreak, 'g');
    var text = this.dateFormat(date, format, locale);
    var seps = text.match(re);
    var value;
    if (!seps) {
      value = [text];
    } else {
      value = text.split(re).map(function(s, i) {
        return s + (seps[i] || '');
      });
    }
    return value;
  }
  _computeNarrow(queryMatches, forceNarrow) {
    return queryMatches || forceNarrow;
  }
  _pageSelected() {
    this._resizeHandler();
  }
  _resizeHandler() {
    if (this._resizing) {
      return;
    }
    this._resizing = true;
    this.$.calendar.notifyResize();
    this._resizing = false;

    this.updateStyles();
  }
} 
      

window.customElements.define('paper-date-picker', PaperDatePicker);