const styleElement = document.createElement('dom-module');

styleElement.innerHTML = 
  `<template>
    <style>
      :host {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        widh: 100%;
        display: inline-block;
        color: var(--primary-text-color);
        @apply --paper-font-body1;
        @apply --paper-date-picker;
      }

      /** Landscape ******************/
      #datePicker {
        min-width: 512px;
        min-height: 248px;
        @apply --layout-horizontal;
        border: 1px solid #d4d2d2;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: -4px 4px 18px 0px #eee;
      }

      /** Narrow *********************/
      :host([narrow]) #datePicker {
        width: 328px;
        height: 428px;
        @apply --layout-vertical;
      }
      :host([narrow]) #heading {
        width: auto;
        height: 96px;
        padding: 16px 24px;
        @apply --paper-date-picker-heading--narrow;
      }

      /** Heading ********************/
      #heading {
        width: 168px;
        padding: 16px;
        box-sizing: border-box;
        color: var(--text-primary-color);
        background: #e05e35;

        @apply --layout-vertical;
        @apply --paper-date-picker-heading;
      }
      #heading .date,
      #heading .year {
        cursor: pointer;
      }
      #heading .date {
        @apply --paper-font-display1;
        font-weight: bold;
        margin-top: 2px;
        @apply --paper-date-picker-heading-date;
      }
      #heading div.date {
        letter-spacing: 0.025em;
      }
      #heading .date span {
        white-space: nowrap;
      }
      #heading .year {
        @apply --paper-font-body2;
        font-size: var(--paper-date-picker-year-size, 16px);
        @apply --paper-date-picker-heading-date;
      }
      #heading:not(.pg-chooseYear) .year,
      #heading.pg-chooseYear .date {
        color: var(--light-primary-color);
      }

      /** Calendar/Year picker ********/
      :host([isTouch]) paper-year-list::-webkit-scrollbar {
        width: 0 !important;
      }
      #pages {
        @apply --layout-flex;
        width: auto;
        background: var(--default-background-color);
      }
      #calendar {
        --paper-calendar: {
          @apply --paper-date-picker-calendar;
        }
      }
      @media screen and (max-width: 768px) {
        #datePicker {
          min-width: 100%;
          overflow: auto;
          border-radius: inherit;
        }
      }
    </style>
  </template>`;

styleElement.register('style-element-date-picker');