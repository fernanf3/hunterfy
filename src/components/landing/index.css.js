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
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
      }
      header {
        position: relative;
        width: 100%;
        height: 100vh;
        z-index: 1;
      }
      // header[loading]:before {
      //   content: '';
      //   position: absolute;
      //   width: 100%;
      //   height: 100%;
      //   background-image: url('./static/mountain-bg.png');
      //   background-repeat: no-repeat;
      //   background-size: cover;
      //   background-attachment: scroll;
      //   background-origin: border-box;
      //   background-blend-mode: normal;
      //   z-index: 1;
      // }
      header > [container] {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        z-index: 2;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header > video {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: fill;
        z-index: 1;
      }
      header::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
        z-index: 1;
      }
      header [container] #blank {
        width: 100%;
      }
      header [container] .content {
        flex: 1;
        display: flex;
        text-align: center;
        color: white;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 8em;
        width: 100%;
      }
      header [container] .content .title {
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 2.5em;
        font-weight: 700;
        line-height: 1.3;
        text-shadow: -2px 1px rgba(0, 0, 0, 0.4);
        padding: 0 15px;
      }
      header [container] .content .subtitle {
        margin-bottom: 1.5em;
        text-shadow: -1.5px 1px rgba(0, 0, 0, 0.4);
        padding: 0 15px;
      }
      header [container] .grid-count {
        flex: 1;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      header [container] .grid-count > div {
        flex: 1;
        flex-basis: 25%;
        max-width: 25%;
        text-align: center;
        color: white;
      }
      header [container] .grid-count > div .count h2 {
        font-size: 30px;
        font-weight: 300;
      }
      paper-button.button-ht {
        font-size: 20px;
        font-weight: 700;
        padding: 1vh 10vh;
        background-color: #e05e35;
        color: white;
      }
      section.expirence,
      section.box-grid,
      section.choose-stalking,
      section.hunting,
      section.linkbuild {
        flex: 1;
        position: relative;
        display: block;
        padding-top: 12vh;
        text-align: center;
      }
      section.linkbuild {
        background-color: #383838;
        padding: 1.5rem 0;
        text-align: left;
      }
      section.hunting {
        padding-bottom: 12vh;
      }
      section.media {
        padding: 30px 15px;
        border-top: 1px solid rgba(0,0,0,.2);
      }
      section.media .container img {
        width: 100%;
        height: 60px;
      }
      section.expirence {
        padding: 12vh 0;
      }
      section.expirence {
        background-color: #f7f7f7;
      }
      section.expirence .title h1,
      section.box-grid .title h1,
      section.choose-stalking .title h1,
      section.hunting .title h1 {
        font-size: 30px;
        text-align: center;
        margin: 0;
      }
      section.expirence .title hr,
      section.box-grid .title hr,
      section.choose-stalking .title hr,
      section.hunting .title hr {
        border-top: 2px solid #e05e35;
        max-width: 5%;
      }
      section.choose-stalking .title p {
        font-size: 18px;
        font-weight: 400;
        margin: 10px 0 0 0;
      }
      section.expirence .content-grid,
      section.box-grid .content-grid,
      section.choose-stalking .content-grid,
      section.linkbuild .content-grid,
      footer .footer .content-grid {
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        margin-top: 6em;
        margin-bottom: 2em;
      }
      section.linkbuild .content-grid {
        flex-direction: column;
        margin: 0;
      }
      section.box-grid .content-grid {
        flex-wrap: wrap;
        justify-content: end;
      }
      section.expirence .content-grid .grid{
        flex: 1;
        text-align: center;
        flex-basis: 20%;
        width: 20%;
        padding: 10px;
      }
      section.box-grid .content-grid .grid.animation {
        display: flex;
        flex: 1;
        flex-basis: 33.33%;
        width: 33.33%;
        max-width: 33.33%;
        height: 200px;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #222;
        inset 0 0 10px rgba(0,0,0,.5);
        flex-direction: column;
      }
      section.box-grid .content-grid .grid.animation img {
        object-fit: fill;
        width: 100%;
        height: 100%;
        transition: all ease-in-out .5s;
      }
      section.box-grid .content-grid .grid.animation:hover img {
        transform: scale(1.05);
      }
      section.box-grid .content-grid .grid.animation p {
        font: 400 12px/1.3 Roboto,Arial,Tahoma,sans-serif;
        color: #eaddcf;
        padding: 0 10px;
      }
      section.box-grid .content-grid .grid.animation span {
        display: inline-block;
        padding-top: 5px;
        font: 500 12px Roboto,Arial,Tahoma,sans-serif;
        color: #eaddcf;
        text-transform: uppercase;
        padding: 0 10px;
      }
      section.expirence .content-grid .grid hr { 
        border-top: 2px solid;
        max-width: 20%;
      }
      section.expirence .content-grid .grid:nth-child(1) hr {
        border-color: #6fc6bf;
      }
      section.expirence .content-grid .grid:nth-child(2) hr {
        border-color: e78161;
      }
      section.expirence .content-grid .grid:nth-child(3) hr {
        border-color: #549b34;
      }
      section.expirence .content-grid .grid:nth-child(4) hr {
        border-color: #7da2d6;
      }
      section.linkbuild .content-grid .grid {
        flex: 1;
        flex-basis: 100%;
        width: 100%;
        color: #eaddcf;
        padding: 0 15px; 
      }
      section.linkbuild .content-grid .grid h4 {
        font-size: 14px;
        font-weight: 400;
        margin: 0;
      }
      section.linkbuild .content-grid .grid hr {
        border-top: 1px solid rgba(255,255,255,.1);
        margin: 5px 0 7px 0;
        width: 100%!important;
      }
      section.linkbuild .content-grid .grid a {
        color: #eaddcf;
        text-decoration: none;
        transition: .2s ease;
      }
      section.linkbuild .content-grid .grid a:hover {
        color: #e05e35;
        text-decoration: none;
      }
      footer {
        position: relative;
        background: #222;
        color: #eaddcf;
      }
      .footer {
        padding: 30px 0;
      }
      footer a {
        color: #eaddcf;
        text-decoration: none;
        transition: all .5s ease;
      }
      footer a:hover {
        color: #e05e35;
      }
      footer .footer .container .content-grid {
        margin: 0;
      }
      footer .footer .container > .content-grid > .grid {
        flex: 1;
        padding: 0px 15px;
        border-left: 1px solid #333;
        height: 150px;
      }
      footer .footer .container > .content-grid > .grid:first-child {
        border-left: none;
      }
      footer .footer .container .content-grid .grid h3 {
        font: 20px Roboto,Arial,Tahoma,sans-serif;
        font-weight: bolder;
        margin: 0 0 15px 0;
        margin: 0;
        color: #eaddcf;
      }
      footer .footer .container .content-grid .grid h4 {
        font: 16px Roboto,Arial,Tahoma,sans-serif;
        font-weight: bolder;
        margin: 0 0 15px 0;
        margin: 0;
        color: #eaddcf;
      }
      footer .footer .container .content-grid .grid ul {
        list-style: none;
        text-decoration: none;
        padding: 0;
      }
      footer .footer .container .content-grid .grid ul a {
        font-size: 15px;
        color: #eaddcf;
        text-decoration: none;
      }
      footer .footer .container .content-grid .grid ul a:hover {
        color: #e05e35;
      }
      footer .footer .container .content-grid .grid .payementmethod-grid {
        display: flex;
        flex-direction: row;
        margin: 1em 0;
      }
      footer .footer .container .content-grid .grid .payementmethod-grid .grid {
        flex: 1;
        padding: 0 5px;
      }
      footer .footer .container .content-grid .grid .payementmethod-grid .grid svg {
        width: 45px;
        height: 28px;
        color: #eaddcf;
      }
      footer .footer .container .content-grid .grid .network-socials {
        margin: 1em 0;
      }
      footer .footer .container .content-grid .grid .network-socials .grid { padding: 0; }
      footer .footer .container .content-grid .grid .network-socials .grid a {
        // color: #eaddcf;
        text-decoration: none;
      }
      footer .footer .container .content-grid .grid .network-socials .grid a iron-icon {
        color: #eaddcf;
      }
      footer .micro-footer {
        padding: 15px;
        border-top: 1px solid #333;
      }
      footer .micro-footer .container .content-grid {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        margin: 0 auto;
      }
      footer .micro-footer .container .content-grid .grid {
        flex: 1;
        text-align: center;
      }
      @media screen and (min-width: 1200px) {
        .container {
          width: 1170px;
        }
        section.box-grid .content-grid .grid.animation {
          flex-basis: 16.66%;
          width: 16.66%;
          max-width: 16.66%;
        }
      }
      @media (max-width: 1200px) and (min-width: 992px) { 
        .container {
          width: 970px;
        }
        section.box-grid .content-grid .grid.animation {
          flex-basis: 25%;
          width: 25%;
          max-width: 25%;
        }
      }
      @media (max-width: 992px) and (min-width: 768px) { 
        .container {
          width: 750px;
        }
        section.box-grid .content-grid .grid.animation {
          flex-basis: 33.33%;
          width: 33.33%;
          max-width: 33.33%;
        }
      }
      @media screen and (max-width: 768px) {
        section.expirence .content-grid {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        section.expirence .content-grid .grid {
          flex: 1;
          text-align: center;
          flex-basis: 100%;
          width: 100%;
          padding: 10px;
        }
        section.box-grid .content-grid .grid.animation {
          flex-basis: 50%;
          width: 50%;
          max-width: 50%;
        }
        header [container] .grid-count > div .count h2 {
          font-size: 24px;
        }
        paper-button.button-ht {
          font-size: 20px;
          font-weight: 700;
          padding: 2vh 10vh;
          background-color: #e05e35;
          color: white;
        }
        header [container] .content .title {
          font-size: 2em;
        }
        header [container] .content .subtitle {
          font-size: 14px;
        }
        section.expirence .title hr,
        section.box-grid .title hr {
          max-width: 20%;
        }
        footer .footer .container > .content-grid {
          flex-wrap: wrap;
        }
        footer .footer .container > .content-grid > .grid {
          flex: 1;
          flex-basis: 100%;
          width: 100%;
          text-align: center;
          padding: 15px;
          border: none;
          height: 65px;
        }
        footer .footer .container > .content-grid > .grid > ul {
          display: flex;
        } 
        footer .footer .container > .content-grid > .grid > ul > li {
          flex: 1;
        }
        footer .footer .container > .content-grid > .grid > .network-socials {
          display: flex;
        }
        footer .footer .container > .content-grid > .grid > .network-socials > .grid {
          flex: 1;
        }
      }
    </style>
  </template>`;

styleElement.register('style-element-landing');