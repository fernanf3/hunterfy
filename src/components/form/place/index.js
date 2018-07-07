import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-ripple/paper-ripple';
import 'paper-input-place/paper-input-place';
import './index.css';

class Place extends PolymerElement {
  static get template(){
    return html`
      <style include="style-element-place"></style>
      <form id="form">
        <h2 class="title">[[ object.name ]], ¿What city are you from?</h2>
        <div class="form-control">
          <paper-input-place 
            label="Place" 
            name="place" 
            id="place" 
            required 
            api-key="AIzaSyBxDdU9RdjN9pGv4jOrDi8sXCYWl1maVJU" 
            value="{{ value }}" 
            place="{{ place }}" 
            error-message="Pick a place from the list"
          >
          </paper-input-place>
          <br/>
          <div class="grid-container">
            <div class="grid-place">
              <a id="gredos">
                <img src="./hunterfy/static/images/G1 Hunting spanish ibex.jpg" alt=""/>
                <h3>gredos</h3>
                <paper-ripple></paper-ripple>
              </a>
            </div>
            <div class="grid-place">
              <a id="sierraNevada">
                <img src="./hunterfy/static/images/Spanish Hunting Landscapes.jpg" alt=""/>
                <h3>sierra nevada</h3>
                <paper-ripple></paper-ripple>
              </a> 
            </div>
            <div class="grid-place">
              <a id="ronda">
                <img src="./hunterfy/static/images/Panoramic view of Ronda.jpg" alt=""/>
                <h3>ronda</h3>
                <paper-ripple></paper-ripple>
              </a>  
            </div>
            <div class="grid-place">
              <a id="beceite">
                <img src="./hunterfy/static/images/G1 Beceite secrets.jpg" alt=""/>
                <h3>beceite</h3>
                <paper-ripple></paper-ripple>
              </a>
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
    this._selectArea = this._selectArea.bind(this);
  }
  ready(){
    super.ready();
    
    this.$.form.addEventListener('submit', this._submit);
    this.$.gredos.addEventListener('click', () => this._selectArea('gredos'));
    this.$.sierraNevada.addEventListener('click', () => this._selectArea('sierra nevada'));
    this.$.ronda.addEventListener('click', () => this._selectArea('ronda'));
    this.$.beceite.addEventListener('click', () => this._selectArea('beceite'));
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
      place: {
        type: Object,
        value: {}
      },
      area: {
        type: Object,
        value: {}
      }
    }
  }
  _back(){
    this.set('page', 'name');
  }
  _selectArea(area){
    this.$.gredos.classList.remove('active');
    this.$.sierraNevada.classList.remove('active');
    this.$.ronda.classList.remove('active');
    this.$.beceite.classList.remove('active');
    switch(area){
      case 'gredos':
        this.$.gredos.classList.add('active');
        break;
      case 'sierra nevada':
        this.$.sierraNevada.classList.add('active');
        break;
      case 'ronda':
        this.$.ronda.classList.add('active');
        break;
      case 'beceite':
        this.$.beceite.classList.add('active');
        break;
    }
    this.area = area;
  }
  _onclick(){
    if(Object.keys(this.place).length > 0 && Object.keys(this.area).length > 0)
      this.$.submit.click();
    else 
      this.toast('You have not selected a place or an area')
  }
  _submit(e){
    e.preventDefault();
    this.setProperties({
      object: {
        ...this.object,
        place: {
          ...this.place,
          area: this.area
        },
      },
      page: 'size'
    })
  }
}

window.customElements.define('app-place', Place);