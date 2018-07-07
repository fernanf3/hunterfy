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
      .form-control paper-input-place {
        position: relative;
        display: block;
        width: 100%;
      }
      .form-control .button-control paper-button {
        width: 48%;
        margin: 0;
        background-color: #e05e35;
        color: #ffff;
      }
      .grid-container {
        position: relative;
        width: auto;
        display: flex;
        flex-wrap: wrap;
        padding: 2.5px;
        margin-top: 2.5px;
      }
      .grid-container .grid-place {
        flex: 1;
        flex-basis: 50%;
        width: 50%;
        box-sizing: border-box;
        padding: 10px;
      }
      .grid-container .grid-place a {
        width: 100%;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        display: flex;
        border-radius: 10px;
        border: 1.5px solid transparent;
        transition: all .2s linear;
      }
      .grid-container .grid-place a.active {
        border-color: #e05e35;
      }
      .grid-container .grid-place img {
        width: 100%;
        height: 100%;
        min-height: 250px;
        object-fit: cover;
        transition: all .5s ease-in-out;
      }
      .grid-container .grid-place a:hover img {
        transform: scale(1.2); 
      }
      .grid-container .grid-place h3 {
        cursor: pointer;
        position: absolute;
        z-index: 200;
        color: white;
        text-shadow: 1px 1px 1px black;
        text-align: center;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        margin: 0;
        text-transform: capitalize;
      }
      @media screen and (max-width: 768px){
        .grid-container .grid-place {
          flex: 1;
          flex-basis: 100%;
          width: 100%;
          box-sizing: border-box;
          padding: 10px;
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

styleElement.register('style-element');