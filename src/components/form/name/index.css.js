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
        align-content: center;
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
      .form-control .button-control paper-button {
        width: 100%;
        background-color: #e05e35;
        color: #ffff;
      }
    </style>
  </template>`;

styleElement.register('style-element-name');