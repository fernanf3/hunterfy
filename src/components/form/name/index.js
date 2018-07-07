import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-ripple/paper-ripple';
import './index.css';

class Name extends PolymerElement {
  static get template(){
    return html`
      <style include="style-element"></style>
      <form id="form">
        <h2 class="title">What is your name?</h2>
        <div class="form-control">
          <paper-input label="Name" name="name" id="name" value="[[ object.name ]]"></paper-input>
          <br/>
          <br/>
          <div class="button-control">
            <paper-button raised on-click="_onclick" on-value-changed="_change">Next</paper-button>
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
        notify: true,
      }
    }
  }
  _onclick(){
    if(this.$.name.value)
      this.$.submit.click();
    else 
      this.toast('The name field is empty');
  }
  _submit(e){
    e.preventDefault();

    this.setProperties({
      object: {
        ...this.object,
        name: this.$.name.value
      },
      page: 'place'
    })
  }
}

window.customElements.define('app-name', Name);