const styleElement = document.createElement('dom-module');

styleElement.innerHTML =
  `<template>
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
        @apply --paper-font-common-base;
        /* for iron-list to fit */
        position: relative;
      }
      .year {
        cursor: pointer;
        height: var(--paper-year-list-item-height, 44px);
        line-height: var(--paper-year-list-item-height, 44px);
        text-align: center;
        vertical-align: middle;
      }
      .selected {
        color: var(--default-primary-color);
        font-size: 24px;
      }
      iron-list {
        @apply --layout-fit;
      }
    </style>
  </template>`;

styleElement.register('style-element-list-year');