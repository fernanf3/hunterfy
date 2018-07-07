const styleElement = document.createElement('dom-module');

styleElement.innerHTML = 
  `<template>
    <style>
      :host {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
      }
      .container {
        display: block;
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
      a[disabled] {
        pointer-events: none;
        cursor: default;
      }
      header {
        flex: 1;
        width: 100%;
        flex-basis: 10%;
        min-height: 10%;
        text-align: center;
        margin-top: 10px;r
        box-sizing: border-box;
      }
      header h4 {
        font-size: 18px;
        font-weight: 300;
        color: #252422;
        margin: 0;
      }
      header p {
        font-size: 14px;
        font-weight: 400;
        color: #9a9a9a;
        margin-bottom: 0;
      }
      .form-content {
        flex: 1;
        width: 100%;
        flex-basis: 70%;
        min-height: 70%; 
      }
      .form-content iron-pages {
        display: flex;
        width: 100%;
        height: 100%;
      }
      .tabs-navigations {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        width: 100%;
        flex-basis: 20%;
        min-height: 20%;
        justify-content: center;
        align-items: center;
      }
      .tabs-navigations .step {
        display: flex;
        flex: 1;
        border-radius: 100%;
        overflow: hidden;
        text-align: center;
        height: 100%;
        min-width: 80px;
        align-items: center;
        justify-content: center;
      }
      .tabs-navigations .step a {
        color: #9a9a9a;
        text-decoration: none;
        transition: all .85s ease;
      }
      .tabs-navigations .step a:hover,
      .tabs-navigations .step a.passed,
      .tabs-navigations .step a.active {
        color: #e05e35;
      }
      .tabs-navigations .step a .step-icon {
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #9a9a9a;
        // color: #e05e35;
        margin-bottom: 8px;
        border-radius: 100%;
        border: 2.5px solid #e7e7e7;
        // border: 2.5px solid #e05e35;
        background-color: transparent;
        transition: all .85s ease;
        overflow: hidden;
        position: relative;
      }
      .tabs-navigations .step a:hover .step-icon,
      .tabs-navigations .step a.passed .step-icon {
        color: #e05e35;
        border: 2.5px solid #e05e35;
      }
      .tabs-navigations .step a.active .step-icon {
        color: white;
        background-color: #e05e35;
        border: 2.5px solid #e05e35;
      }
      @media screen and (min-width: 1200px) {
        .container {
          width: 1170px;
        }
      }
      @media (max-width: 1200px) and (min-width: 992px) { 
        
      }
      @media (max-width: 992px) and (min-width: 768px) { 
        .container {
          width: 750px;
        }
      }
      @media screen and (max-width: 768px) {
        .container {
          padding: 0;
        }
        .tabs-navigations .step {
          max-width: 80px;
        }
        .tabs-navigations .step:first-child,
        .tabs-navigations .step:last-child {
          display: none;
        }
      }
    </style>
  </template>`;

styleElement.register('style-element');