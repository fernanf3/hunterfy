const styleElement = document.createElement('dom-module');

styleElement.innerHTML = 
  `<template>
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        padding: 12px 0;
        position: relative;
        width: 100%;
        height: 100%;
        min-width: 160px;
        min-height: 160px;
        color: var(--primary-text-color);
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        --ease-in-sine: cubic-bezier(0.47, 0, 0.745, 0.715);
        --ease-out-sine: cubic-bezier(0.39, 0.575, 0.565, 1);
        @apply --paper-font-body1;
        @apply --paper-calendar;
        overflow: hidden;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        @apply --paper-calendar;
      }
      #calendar {
        position: relative;
        width: 100%;
        height: 100%;
        @apply --layout-horizontal;
      }
      #months {
        height: 100%;
        @apply --layout-horizontal;
      }
      #months.animating .month-nav {
        opacity: 1;
      }
      #months.animating {
        transition-property: transform, opacity;
        transition-duration: 300ms;
      }
      #months.animating.swipe {
        transition-timing-function: var(--ease-in-sine);
        --webkit-transition-timing-function: var(--ease-in-sine);
      }
      #months.animating.reset {
        transition-timing-function: var(--ease-out-sine);
        --webkit-transition-timing-function: var(--ease-out-sine);
      }
      .month {
        height: 100%;
        @apply --layout-vertical;
        @apply --layout-justified;
        @apply --layout-flex;
      }

      .month-row, .month-nav {
        height: calc(100%/8);
        box-sizing: border-box;
        padding: 0 calc(100%/36);
      }

      .month-col {
        position: relative;
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      .month-nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 1;
        @apply --layout-horizontal;
        @apply --layout-center;
      }
      .month-nav .col {
        position: relative;
        @apply --layout-vertical;
        @apply --layout-center-center;
      }
      .month-nav .btn .icon {
        cursor: pointer;
      }
      .month-nav .btn .ripple {
        position: absolute;
        width: 48px;
        height: 48px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .month-nav .btn.right {
        text-align: right;
      }
      .month-name {
        line-height: 24px;
        vertical-align: middle;
        text-align: center;
        font-weight: bold;
        @apply --paper-font-body2;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }
      .month-weekdays {
        color: var(--secondary-text-color);
        @apply --layout-horizontal;
        @apply --layout-justified;
        @apply --layout-flex;
      }
      .month-days {
        @apply --layout-horizontal;
        @apply --layout-justified;
        @apply --layout-flex;
      }
      .month-col .day {
        cursor: default;
        pointer-events: none;
        @apply --layout-fit;
        @apply --layout-vertical;
        @apply --layout-center-center;
      }
      .month-col {
        position: relative;
        width: 100%;
        height: 100%;
        @apply --layout-center-center;
      }
      .day-item {
        border-radius: 100%;
        width: 100%;
        height: 100%;
      }
      .day-item::selection {
        background: none;
      }
      .day-item.selected {
        background: #e05e35;
      }
      .day-item.selected .day {
        color: var(--text-primary-color);
      }
      .day-item:not([disabled]) {
        cursor: pointer;
      }
      .day-item[disabled] .day {
        color: var(--text-disabled-color, #9d9d9d);
      }
      .day-item.today .day {
        color: var(--default-primary-color);
      }
      .day-item.selected.today .day {
        color: var(--text-primary-color);
      }
      .flex {
        @apply --layout-flex;
      }
      .flex-5 {
        @apply --layout-flex-5;
      }
    </style>
  </template>`;

styleElement.register('style-element-calendar');