import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages';
import '@polymer/app-layout/app-header-layout/app-header-layout';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects';
import '@polymer/paper-toast/paper-toast';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-ripple/paper-ripple';
import './utils/icons';

import './components/landing';
import './components/form';


setPassiveTouchGestures(true);

setRootPath(MyAppGlobals.rootPath);

class AppRoot extends PolymerElement {
  static get template(){
    return html`
      <style>
        :host {
          position: relative; 
          display: block;
          box-sizing: boder-box;
          width: 100%;
          height: 100%;
        }
        app-drawer {
          --app-drawer-content-container: {
            color: white;
            background-color: #222;
          }
        }
        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }
        .drawer-list {
          margin: 0 20px;
        }
        .drawer-list {
          margin: 0 20px;
        }
        .drawer-list a {
          border-top: 1px solid rgba(255,255,255,0.08);
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
          outline: none;
        }
        .drawer-list a.iron-selected {
          color: white;
          font-weight: bold;
        }
        app-header {
          color: #fff;
          background-color: rgba(255, 255, 255, 0);
          transition: all 0.2s ease-in-out !important;
        }
        app-header[shadow] {
          color: black;
          background-color: rgba(255, 255, 255, 1);
        }
        app-header[shadow] a {
          color: black;
        }
        app-header[hidden] {
          display: none;
        }
        iron-pages {
          position: relative;
          display: flex;
          width: 100%;
          height: 100%;
        }
        paper-icon-button.logo {
          padding: inherit;
          width: 134px;
        }
        paper-icon-button[icon="app-icons:menu"] {
          display: none;
        }
        [main-href] {
          display: flex;
          flex: 1;
          justify-content: flex-end;          
        }
        paper-button,
        paper-button a {
          color: white;
          text-transform: none;
          font-size: 14px;
          text-decoration: none;
        }
        paper-button div {
          display: inline-block;
        }
        paper-button:hover a {
          color: #e05e35;
        }
        @media screen and (max-width: 768px) {
          app-header app-toolbar paper-button {
            min-width: auto !important;
          }
          app-header app-toolbar paper-button {
            display: none;
          }
          app-header app-toolbar paper-icon-button[icon="app-icons:menu"] {
            display: block;
          }
        }
      </style>
      <app-location route="{{ route }}" url-space-regex="^[[ rootPath ]]"></app-location>
      <app-route route="{{ route }}" pattern="[[ rootPath ]]:page" data="{{ routeData }}" tail="{{ subroute }}"></app-route>
      <app-drawer-layout fullbleed="" force-narrow>
        <app-drawer id="drawer" slot="drawer" >
          <app-toolbar>
            <a href="[[ routePath ]]">
              <paper-icon-button class="logo" src="./hunterfy/static/logo.png" disabled></paper-icon-button>
            </a>
          </app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="landing" href="[[ routePath ]]form/name">
              <iron-icon icon="app-icons:person"></iron-icon>
              Hunting Assistant
            </a>
            <a href="tel:+34649613609">
              <iron-icon icon="app-icons:phone"></iron-icon>
              34 649 613 609
            </a>
            <a href="mailto:hello@hunterfy.com">
              <iron-icon icon="app-icons:mail"></iron-icon>
              hello@hunterfy.com
            </a>
            <a href="[[ routePath ]]contact">
              <iron-icon icon="app-icons:info"></iron-icon>
              Contact
            </a>
          </iron-selector>
        </app-drawer>
        <app-header-layout has-scrolling-region fullbleed id="layout">
          <app-header slot="header" condenses fixed effects="waterfall" id="header" hidden="[[ hidden ]]">
            <app-toolbar>
              <paper-icon-button class="logo" src="./hunterfy/static/logo.png"></paper-icon-button>
              <div main-href>
                <paper-button>
                  <a href="[[ routePath ]]form">
                    <iron-icon icon="app-icons:person"></iron-icon>
                    <div>Hunting Assistant</div>
                  </a>
                </paper-button>
                <paper-button>
                  <a href="tel:+34649613609">
                    <iron-icon icon="app-icons:phone"></iron-icon>
                    <div>34 649 613 609</div>
                  </a>
                </paper-button>
                <paper-button>
                  <a href="mailto:hello@hunterfy.com">
                    <iron-icon icon="app-icons:mail"></iron-icon>
                    <div>hello@hunterfy.com</div>
                  </a>
                  </paper-button>
                <paper-button>
                  <a href="[[ routePath ]]contact">
                    <iron-icon icon="app-icons:info"></iron-icon>
                    <div>Contact</div>
                  </a>
                </paper-button>
                <paper-icon-button icon="app-icons:menu" drawer-toggle>
                </paper-icon-button>
              </div>
              <paper-progress slot="middle" class="fit" value="60"></paper-progress>
            </app-toolbar>
          </app-header>
          <iron-pages selected="[[ page ]]" attr-for-selected="view" role="main">
            <app-landing 
              view="landing"
              route="{{ subroute }}"
              routeData="{{ routeData }}"
              toast="{{ _openToast }}"
              pt="{{ paddingTop }}"
            >
            </app-landing>
            <app-form    
              view="form"
              route="{{ subroute }}"
              routeData="{{ routeData }}"
              toast="{{ _openToast }}"
            />
            </app-form>
            <app-contact
              view="form"
              route="{{ routeData }}" 
              routeData="{{ routeData }}"
              toast="{{ _openToast }}"
            >
            </app-contact>
          </iron-pages>
          <paper-toast id="toast" text="[[ message ]]"></paper-toast>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }
  constructor(){
    super();

    this._openToast = this._openToast.bind(this);
  }
  ready(){
    super.ready();

    this.paddingTop = this.$.header.offsetHeight;
  }
  static get properties(){
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      hello: String,
      routeData: Object,
      subroute: Object,
      routePath: Object,
    };
  }
  static get observers(){
    return [
      '_routePageChanged(routeData.page)'
    ];
  }
  _routePageChanged(page){
    if(!page)
      this.page = 'landing';
    else if(['landing', 'form'].indexOf(page) !== -1)
      this.page = page;
    else {
      this.page = 'landing';
      this.set('routeData', '/')
    } 
  }
  _pageChanged(page){
    switch (page) {
      case 'landing':
        this.hidden = false;
        break;
      case 'form':
        this.hidden = true;
        break;
      default:
        this.hidden = false;
        break;
    }
  }
  _openToast(message) {
    this.message = message;
    this.$.toast.open();
  }
}

window.customElements.define('app-root', AppRoot)