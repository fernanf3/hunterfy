import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-ripple/paper-ripple';
import '@polymer/paper-icon-button/paper-icon-button';
import '../../../utils/icons';
import './index.css';

class Huntings extends PolymerElement {
  static get template(){
    return html`
      <style include="style-element-hunting"></style>
      <form id="form">
        <h2 class="title">How many are you?</h2>
        <div class="form-control">
          <div class="selected-button">
            <div class="grid">
              <div class="count">[[ hunting.countHunting ]]</div>
              <div class="label">Hunters</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-tap="_removeHunters"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-tap="_addHunters"></paper-icon-button>
              </div>
            </div>
            <div class="grid">
              <div class="count">[[ hunting.countCompanions ]]</div>
              <div class="label">Companions</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-tap="_removeCompanions"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-tap="_addCompanions"></paper-icon-button>
              </div>
            </div>
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
    `;
  }
  constructor(){
    super();

    this._submit = this._submit.bind(this);
    this._onclick = this._onclick.bind(this);
    this._back = this._back.bind(this);
  }
  ready(){
    super.ready();

    this.hunting = {
      countHunting: 0,
      countCompanions: 0
    }

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
      }
    }
  }
  _addHunters(){
    this.set('hunting.countHunting', this.hunting.countHunting + 1);
  }
  _addCompanions(){
    this.set('hunting.countCompanions', this.hunting.countCompanions + 1);
  }
  _removeHunters(){
    if(this.hunting.countHunting > 0)
      this.set('hunting.countHunting', this.hunting.countHunting - 1);
  }
  _removeCompanions(){
    if(this.hunting.countCompanions > 0)
    this.set('hunting.countCompanions', this.hunting.countCompanions + 1);
  }
  _back(){
    this.set('page', 'place');
  }
  _onclick(){
    if(this.hunting.countCompanions > 0 || this.hunting.countHunting > 0)
      this.$.submit.click();
    else 
      this.toast('You have not selected a hunter amount')
  }
  _submit(e){
    e.preventDefault();
    this.setProperties({
      object: {
        ...this.object,
        hunting: this.hunting
      },
      page: 'sendEmail' 
    })
  }
}

window.customElements.define('app-hunting', Huntings);