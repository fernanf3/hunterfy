import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-ripple/paper-ripple';
import '@polymer/iron-icon/iron-icon';
import '../../../utils/paper-date-picker';
import '@polymer/paper-dialog/paper-dialog';
import './index.css';

class Calendar extends PolymerElement {
  static get template(){
    return  html`
      <style include="style-element-calendar"></style>
      <form id="form">
        <h2 class="title">When does the adventure begin?</h2>
        <div class="form-control">
          <div class="form-grid">
            <paper-input on-tap="_openDialogStart" type="date" label="Start date:" required value="{{ date.startLabel }}"></paper-input>
            <paper-input on-tap="_openDialogEnd" type="date" label="End date:" required value="{{ date.endLabel }}"></paper-input> 
          </div>
          <br/>
          <br/>
          <div class="button-control">
            <paper-button raised on-tap="_back">Back</paper-button>
            <paper-button raised on-tap="_onclick">Next</paper-button>
            <button type="submit" id="submit" class="hidden"></button>  
          </div>  
        </div>
      </form>
      <paper-dialog id="datePickerStart">
        <paper-date-picker date="{{ date.start }}"></paper-date-picker>
        <div class="buttons">
          <paper-button dialog-confirm>Cancel</paper-button>
          <paper-button on-tap="_submitStart">OK</paper-button>
        </div>  
      </paper-dialog>
      <paper-dialog id="datePickerEnd">
        <paper-date-picker date="{{ date.end }}"></paper-date-picker>
        <div class="buttons">
          <paper-button dialog-confirm>Cancel</paper-button>
          <paper-button on-tap="_submitEnd">OK</paper-button>
        </div>  
      </paper-dialog> 
    `;
  }
  constructor(){
    super();

    this._back = this._back.bind(this);
    this._onclick = this._onclick.bind(this);
    this._submit = this._submit.bind(this);
  }
  ready(){
    super.ready();

    this.$.form.addEventListener('submit', this._submit);
  }
  static get properties(){
    return {
      page: {
        type: Object,
        notify: true
      },
      object: {
        type: Object,
        notify: true
      },
      date: {
        type: Object,
        value: {}
      }
    }
  }
  _openDialogStart(){
    this.$.datePickerStart.open()
  }
  _openDialogEnd(){
    this.$.datePickerEnd.open();
  }
  _submitStart(){
    this.set('date.startLabel', moment(this.date.start).format('YYYY-MM-DD'))
    this.$.datePickerStart.close();
    console.log(this.date.startLabel)
  }
  _submitEnd(){
    this.set('date.endLabel', moment(this.date.end).format('YYYY-MM-DD'))
    this.$.datePickerEnd.close();
    console.log(this.date.endLabel)
  }
  _back(){
    this.set('page', 'size');
  }
  _onclick(){
    if(this.date.startLabel && this.date.endLabel){
      console.log(moment(this.date.endLabel).isAfter(this.date.startLabel))
      if(moment(this.date.endLabel).isAfter(this.date.startLabel))
        this.$.submit.click();
      else 
        this.toast('The end date has to be higher than the start date')
    }else 
      this.toast('You have not selected any dates')
  }
  _submit(e){
    e.preventDefault();
    this.setProperties({
      object: {
        ...this.object,
        calendar: {
          start: this.date.startLabel,
          end: this.date.endLabel
        }
      },
      page: 'hunting'
    })
  }
}

window.customElements.define('app-calendar', Calendar)