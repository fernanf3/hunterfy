import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-ripple/paper-ripple';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-spinner/paper-spinner';
import './index.css';

class sendEmail extends PolymerElement {
  static get template(){
    return html`
      <style include="style-element-sendEmail"></style>
      <form id="form">
        <h2 class="title">[[ object.name ]], leave your contact details ready</h2>
        <h4 class="subtitle">We send you the offers you are looking for</h4>
        <div class="form-control">
          <paper-input type="email" label="Email" name="email" id="email" value="[[ object.sendEmail.email ]]"></paper-input>
          <paper-input type="tel" label="Phone" name="phone" id="phone" value="[[ object.sendEmail.phone ]]"></paper-input>
          <br/>
          <br/>
          <div class="button-control">
            <paper-checkbox on-change="_checkboxPriv">
              I accept and agree with the <a href="">Privacy Policies</a> 
            </paper-checkbox>
            <h5>You're one step away from hunting with Hunterfy!</h5>
            <paper-button raised on-click="_back">Back</paper-button>
            <paper-button raised on-click="_onclick" disabled$="[[ loading ]]">
              <span>Get my offers</span>
              <paper-spinner active></paper-spinner>
            </paper-button>
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
    this._checkboxPriv = this._checkboxPriv.bind(this);
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
  _back(){
    this.set('page', 'hunting');
  }
  _onclick(){
    if(this.object.policePriv === true){
      if(this.$.email.value && this.$.phone.value)
        this.$.submit.click();
      else 
        this.toast('The email field or phone filed is empty');
    }else 
      this.toast('You have not accepted the privacy policies');
  }
  _checkboxPriv(e){
    this.set('object.policePriv', e.target.checked)
  }
  _submit(e){
    e.preventDefault();
    this.setProperties({
      object: {
        ...this.object,
        sendEmail: {
          email: this.$.email.value,
          phone: this.$.phone.value
        }
      }
    })
    this.loading = !this.loading;
    fetch('./sendEmail.php',
      { 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: this.object
      }
    )
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(error => { this.toast('Error de conexion'); console.log(error);})
    .finally(() => this.loading = !this.loading)
  }
}

window.customElements.define('app-sendemail', sendEmail);