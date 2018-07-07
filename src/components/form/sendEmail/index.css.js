const styleElement = document.createElement('dom-module');

styleElement.innerHTML = 
  `<template>
    <style>
      :host {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        --paper-input-container-focus-color: #e05e35;
        --paper-checkbox-checked-color: #e05e35;
        --paper-checkbox-checked-color: #e05e35;
      }
      .hidden {
        display: none;
      }
      form {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-content: center;
      }
      .title {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        font-size: 30px;
        text-align: center;
      }
      .subtitle {
        text-align: center;
        margin: 0;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
        font-size: 18px;
      }
      .form-control {
        width: 50%;
        margin: 0 auto;
      }
      .form-control .button-control {
        text-align: center;
      }
      .form-control .button-control paper-button {
        width: 48%;
        margin: 0;
        background-color: #e05e35;
        color: #ffff;
      }
      paper-button[disabled] span { visibility: hidden; }
      paper-button paper-spinner { display: none; }
      paper-button[disabled] paper-spinner { display: block !important; }
      paper-button[disabled] paper-spinner {
        position: absolute;
        width: 20px;
        height: 20px;
      }
    </style>
  </template>`;

styleElement.register('style-element');