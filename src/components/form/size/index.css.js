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
      .form-control .button-control {
        text-align: center;
      }
      .form-control .button-control paper-button {
        width: 48%;
        margin: 0;
        background-color: #e05e35;
        color: #ffff;
      }
      .form-control .selected-button {
        display: flex;
        width: 100%;
        flex-direction: column;
      }
      .form-control .selected-button .grid {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .form-control .selected-button .grid > div {
        flex: 1;
        padding: 5px;
      }
      .form-control .selected-button .grid .count {
        font-size: 30px;
        font-weight: 700;
        color: #e05e35;
        text-align: center;
      }
      .form-control .selected-button .grid .label {
        font-size: 18px;
        text-align: center;
      }
      .form-control .selected-button .grid .button {
        text-align: center;
      }
      .form-control .selected-button .grid .button paper-icon-button {
        background-color: #e05e35;
        color: #ffff;
        border-radius: 100%;
      }
      @media screen and (max-width: 768px) {
        .form-control {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
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

styleElement.register('style-element-size');