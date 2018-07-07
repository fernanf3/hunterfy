import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-list/iron-list';
import '@polymer/paper-ripple/paper-ripple';
import '@polymer/paper-styles/default-theme';
import './index.css';

class PaperYearList extends mixinBehaviors([IronResizableBehavior], PolymerElement) {
  static get template(){
    return html`
      <style include="style-element-list-year"></style>
      <iron-list id="yearList" items="[[_years]]">
        <template>
          <div class$="year{{_addSelectedClass(selected)}}" on-tap="_tappedYearHandler">
            [[item.year]]
          </div>
        </template>
      </iron-list>
    `;
  }
  static get properties(){
    return {
      date: {
        type: Date,
        notify: true,
        observer: '_dateChange'
      },
      max: {
        type: Number,
        value: 2100,
        observer: '_maxChange'
      },
      min: {
        type: Number,
        value: 1900,
        observer: '_minChange'
      },
      selected: {
        type: Number,
        notify: true,
        observer: '_selectedChange'
      },
      _years: {
        type: Array,
        computed: '_computeYears(min, max)',
        readOnly: true,
        value() {
          return Date.now().getFullYear;
        }
      }
    }
  }
  ready() {
    super.ready();
    // hack for iron-list not to scroll to the first visible index on resize 
    this.$.yearList._resizeHandler = function() {
      this.debounce('resize', function() {
        this._render();
        if (this._itemsRendered && this._physicalItems && this._isVisible) {
          this._resetAverage();
          this.updateViewportBoundaries();
        }
      });
    }.bind(this.$.yearList);
  }
  centerSelected() {
    if (this.selected !== null) {
      var selectedYearIdx = this.selected - this.min;
      this.$.yearList.scrollToIndex(selectedYearIdx);
      this.async(function() {
        var selectedPos = selectedYearIdx * this._physicalAverage + 1;
        if (selectedPos !== this.scrollTop) {
          this._update();
          this.scrollTop = selectedPos;
        }
        if (this.scrollHeight - this.offsetHeight !== this.scrollTop) {
          this.scrollTop += (this._physicalAverage - this.offsetHeight) / 2;
        }
      }.bind(this.$.yearList));
    }
  }
  _addSelectedClass(selected) {
    if (selected) {
      return ' selected';
    }
  }
  _computeYears(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
      return;
    }
    var years = [];
    for (;min <= max; min++) {
      years.push({year: min});
    }
    return years;
  }
  _dateChange(date) {
    var newYear = date.getFullYear();
    this.selected = this._withinRange(newYear) ? newYear : null;
  }
  _maxChange(max) {
    if (typeof max !== 'number') {
      this.max = 2100;
    }
  }
  _minChange(min) {
    if (typeof min !== 'number') {
      this.min = 1900;
    }
  }
  _selectedChange(selected) {
    if (selected === null) {
      this.$.yearList.clearSelection();
      return;
    }
    if (selected !== this.date.getFullYear()) {
      // set the year using a new Date instance for notifying to work
      this.date = new Date(this.date.setFullYear(selected));
    }
    this._selectYearInList(selected);
  }
  _selectYearInList(year) {
    var yearIdx = year - this.min;
    this.$.yearList.selectIndex(yearIdx);
  }
  _tappedYearHandler(e) {
    var yearItem = e.model.item;
    var year = yearItem.year;
    if (this.selected !== year) {
      this.$.yearList.selectItem(yearItem);
      this.selected = year;
    }
  }
  _withinRange(year) {
    return  !(this.min && year < this.min || this.max && year > this.max );
  }
}

window.customElements.define('paper-list-year', PaperYearList);