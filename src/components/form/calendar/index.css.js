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
    }
    .hidden {
      display: none;
    }
    form {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .title {
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;
      font-size: 30px;
      text-align: center;
    }
    .form-control {
      width: 50%;
      margin: 0 auto;
    }
    .form-control .form-grid {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .form-control .form-grid paper-input {
      flex: 1;
      padding: 0 10px;
      box-sizing: border-box;
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
    paper-dialog .buttons paper-button {
      color: #e05e35;
    }
    @media screen and (max-width: 768px) {
      .form-control {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
      }
      .form-control .form-grid {
        flex-direction: column;
      }
      .form-control .form-grid paper-input {
        width: 100%;
      }
      paper-dialog {
        top: 0;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      paper-dialog paper-date-picker {
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
      }
    }
    @media screen and (max-width: 390px){
      .form-control .button-control paper-button {
        width: 100%;
        margin-bottom: 10px;
      }
    }
   </style>
 </template>`;

 styleElement.register('style-element-calendar');