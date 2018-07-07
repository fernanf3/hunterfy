import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/app-route/app-route';
import '@polymer/paper-ripple/paper-ripple';
import './index.css';

import './name';
import './place';
import './size';
import './calendar';
import './hunting';
import './sendEmail';

class Form extends PolymerElement {
  static get template(){
    return html`
      <style include="style-element"></style>
      <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{subrouteData}}"
      >
      </app-route>
      <div class="container">
        <header>
          <div class="container">
            <h4>Hunterfy</h4>
            <p>Fill out this questionnaire to offer you the best experience!</p>
          </div>
        </header>
        <div class="form-content">
          <div class="container">
            <iron-pages selected="[[ page ]]" attr-for-selected="subview" role="main">
              <app-name 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="name"
                toast="{{ toast }}"
              >
              </app-name>
              <app-place 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="place"
                toast="{{ toast }}"
              >
              </app-place>
              <app-size 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="size"
                toast="{{ toast }}"
              >
              </app-size>
              <app-calendar 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="calendar"
                toast="{{ toast }}"
              >
              </app-calendar>
              <app-hunting 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="hunting"
                toast="{{ toast }}"
              >
              </app-hunting>
              <app-sendemail 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="sendEmail"
                toast="{{ toast }}"
              >
              </app-sendemail>
            </iron-pages>
          </div>
        </div>
        <div class="tabs-navigations">
          <div class="step"></div>
          <div class="step">
            <a href="/form/name" class$="[[ tabs.name  ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:account-box"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Name</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/place" class$="[[ tabs.place ]]" disabled$="[[ !object.name ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:my-location"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Place</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/size" class$="[[ tabs.size ]]" disabled$="[[ !object.place ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:pets"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Press size</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/calendar" class$="[[ tabs.calendar ]]" disabled$="[[ !object.size ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:date-range"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Calendar</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/hunting" class$="[[ tabs.hunting ]]" disabled$="[[ !object.calendar ]]">   
              <div class="step-icon">
                <iron-icon icon="app-icons:people"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Hunters</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/sendEmail" class$="[[ tabs.sendEmail ]]" disabled$="[[ !object.hunting ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:send"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Send</div>
            </a>
          </div>
          <div class="step"></div>
        </div>
      </div>
    `;
  }
  static get properties(){
    return {
      page: {
        type: Object,
        reflectToAttribute: true,
        observer: '_stepChange'
      },
      route: Object,
      object: {
        type: Object,
        reflectToAttribute: true,
        value: {}
      },
      tabs: {
        type: Object,
        value: {
          name: '',
          place: '',
          size: '',
          calendar: '',
          hunting: '',
          sendEmail: ''
        }
      },
    }
  }
  static get observers(){
    return [
      '_routePageChanged(subrouteData.page)'
    ];
  }
  ready(){
    super.ready();

    this._validRoute();
  }
  _validRoute(){
    if(Object.keys(this.object).length === 0){
      this.set('tabs.name', 'active');
      this.set('tabs.place', '');
      this.set('tabs.size', '');
      this.set('tabs.calendar', '');
      this.set('tabs.hunting', '');
      this.set('tabs.sendEmail', '');
      return this.page = 'name';
    }
    if(['name'].indexOf(this.object) !== -1){
      this.set('tabs.name', 'active');
      this.set('tabs.place', 'active');
      this.set('tabs.size', '');
      this.set('tabs.calendar', '');
      this.set('tabs.hunting', '');
      this.set('tabs.sendEmail', '');
      return this.page = 'place';
    }
    if(['name','place'].indexOf(this.object) !== -1){
      this.set('tabs.name', 'active');
      this.set('tabs.place', 'active');
      this.set('tabs.size', 'active');
      this.set('tabs.calendar', '');
      this.set('tabs.hunting', '');
      this.set('tabs.sendEmail', '');
      return this.page = 'size';
    } 
    if(['name','place','size'].indexOf(this.object) !== -1){
      this.set('tabs.name', 'active');
      this.set('tabs.place', 'active');
      this.set('tabs.size', 'active');
      this.set('tabs.calendar', 'active');
      this.set('tabs.hunting', '');
      this.set('tabs.sendEmail', '');
      return this.page = 'calendar';
    } 
    if(['name','place','size','calendar'].indexOf(this.object) !== -1){
      this.set('tabs.name', 'active');
      this.set('tabs.place', 'active');
      this.set('tabs.size', 'active');
      this.set('tabs.calendar', 'active');
      this.set('tabs.hunting', 'active');
      this.set('tabs.sendEmail', '');
      return this.page = 'hunting';
    }
    if(['name','place','size','calendar','hunting'].indexOf(this.object) !== -1){
      this.set('tabs.name', 'active');
      this.set('tabs.place', 'active');
      this.set('tabs.size', 'active');
      this.set('tabs.calendar', 'active');
      this.set('tabs.hunting', 'active');
      this.set('tabs.sendEmail', 'active');
      return this.page = 'sendEmail';  
    }
  }
  _routePageChanged(page){
    if(!page)
      this.page = 'name';
    else if(['name', 'place', 'size', 'calendar', 'hunting', 'sendEmail'].indexOf(page) !== -1)
      this.page = page;
    else {
      this.page = 'landing';
      this.set('route.path', '/')
    } 
  }
  _stepChange(page){
    console.log('step')
    switch(page){
      case 'name':
        this.set('route.path', '/name');
        this.set('tabs.name', 'active');
        break;
      case 'place':
        this.set('route.path', '/place');
        this.set('tabs.place', 'active');
        break;
      case 'size':
        this.set('route.path', '/size');
        this.set('tabs.size', 'active');
        break;
      case 'calendar':
        this.set('route.path', '/calendar');
        this.set('tabs.calendar', 'active');
        break;
      case 'hunting':
        this.set('route.path', '/hunting');
        this.set('tabs.hunting', 'active');
        break;
      case 'sendEmail':
        this.set('route.path', '/sendEmail');
        this.set('tabs.sendEmail', 'active');
        break;
      default:
        this.set('route.path', '/name');
        this.set('tabs.name', 'active');
        break;
    }
  }
}

window.customElements.define('app-form', Form);