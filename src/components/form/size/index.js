import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-ripple/paper-ripple';
import '@polymer/paper-icon-button/paper-icon-button';
import '../../../utils/icons';
import './index.css';

class Size extends PolymerElement {
  static get template(){
    return html`
      <style include="style-element"></style>
      <form id="form">
        <h2 class="title">What category of trophy doo you want?</h2>
        <div class="form-control">
          <div class="selected-button">
            <div class="grid">
              <div class="count">[[ size.countGold ]]</div>
              <div class="label">Gold</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeGold"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addGold"></paper-icon-button>
              </div>
            </div>
            <div class="grid">
              <div class="count">[[ size.countSilver ]]</div>
              <div class="label">Silver</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeSilver"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addSliver"></paper-icon-button>
              </div>
            </div>
            <div class="grid">
              <div class="count">[[ size.countBronce ]]</div>
              <div class="label">Bronce</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeBronce"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addBronce"></paper-icon-button>
              </div>
            </div>
            <div class="grid">
              <div class="count">[[ size.countRepresentative ]]</div>
              <div class="label">Representative</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeRepresentative"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addRepresentative"></paper-icon-button>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div class="button-control">
            <paper-button raised on-click="_back">Back</paper-button>
            <paper-button raised on-click="_onclick">Next</paper-button>
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

    this.size = {
      countGold: 0,
      countSilver: 0,
      countBronce: 0,
      countRepresentative: 0
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
  _addGold(){
    this.set('size.countGold', this.size.countGold + 1);
  }
  _addSliver(){
    this.set('size.countSilver', this.size.countSilver + 1);
  }
  _addBronce(){
    this.set('size.countBronce', this.size.countBronce + 1);
  }
  _addRepresentative(){
    this.set('size.countRepresentative', this.size.countRepresentative + 1);
  }
  _removeGold(){
    if(this.size.countGold > 0)
      this.set('size.countGold', this.size.countGold - 1);
  }
  _removeSilver(){
    if(this.size.countSilver > 0)
      this.set('size.countSilver', this.size.countSilver - 1);
  }
  _removeBronce(){
    if(this.size.countBronce > 0)
      this.set('size.countBronce', this.size.countBronce - 1);
  }
  _removeRepresentative(){
    if(this.size.countRepresentative > 0)
      this.set('size.countRepresentative', this.size.countRepresentative - 1);
  }
  _back(){
    this.set('page', 'place');
  }
  _onclick(){
    if(this.size.countGold > 0 || this.size.countSilver > 0 || this.size.countBronce > 0 || this.size.countRepresentative > 0)
      this.$.submit.click();
    else
      this.toast('You have not selected any category of trophies')
  }
  _submit(e){
    e.preventDefault();
    this.setProperties({
      object: {
        ...this.object,
        size: this.size
      },
      page: 'calendar' 
    })
  }
}

window.customElements.define('app-size', Size);