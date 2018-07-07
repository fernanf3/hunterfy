import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon';
import '../../utils/icons';
import './index.css';

class Landing extends PolymerElement {
  static get template(){
    return html`
      <style include="style-element-landing"></style>
      <header>
        <div container>
          <div id="blank"></div>
          <div class="content">
            <h1 class="title">Ibex largest plataform in Spain</h1>
            <h2 class="subtitle">We compare among hundreds of outfitters. Design your trip in in 1 minute.</h2>
            <a href="[[ routePath ]]form">
              <paper-button class="button-ht">let's go</paper-button>
            </a>
          </div>
          <div class="grid-count">
            <div>
              <div class="count">
                <h2 id="OneCount"></h2>
              </div>
              <div class="text-count"> 
                <p>
                  Verified
                  <br/>
                  Outfitters
                </p>
              </div>
            </div>
            <div>
              <div class="count">
                <h2 id="TwoCount"></h2>
              </div>
              <div class="text-count">
                <p>
                  Hunting
                  <br/>
                  Hectares
                </p>
              </div>
            </div>
            <div>
              <div class="count">
                <h2 id="ThirdCount"></h2> 
              </div>
              <div class="text-count">
                <p>
                  Avilable
                  <br/>
                  Offers
                </p>
              </div>
            </div>
          </div>
        </div>
        <video src="./hunterfy/static/video/video.mp4" type="video/mp4" autoplay loop muted poster="./hunterfy/static/mountain-bg.png"></video>
      </header>
      <section class="expirence">
        <div class="container">
          <div class="title">
            <h1>Hunterfy Experience</h1>
            <hr/>
          </div> 
          <div class="content-grid">
            <div class="grid">
              <img src="./hunterfy/static/icon/tell.png" alt="icon-tell" class="img-card"/>
              <h3 class="title">Tell us what you need</h3>
              <hr/>
              <p>
                Create your own trip
                <br/>
                answering a few simple questions
              </p>
            </div>
            <div class="grid">
              <img src="./hunterfy/static/icon/check.png" alt="icon-check" class="img-card"/>
              <h3 class="title">Verified Outfitters</h3>
              <hr/>
              <p>
                We compare and contrast all of our  outfitters
              </p>
            </div>
            <div class="grid">
              <img src="./hunterfy/static/icon/sofa.png" alt="icon-safa" class="img-card"/>
              <h3 class="title">Book it from your sofa</h3>
              <hr/>
              <p>
                Reserve online and avoid uncomfortable steps
              </p>           
            </div>
            <div class="grid">
              <img src="./hunterfy/static/icon/something.png" alt="icon-somthing" class="img-card"/>
              <h3 class="title">No commissions</h3>
              <hr/>
              <p>
              Direct contact with the outfitter
              </p>
              </div>
          </div> 
          <a href="[[ routePath ]]form">
            <paper-button class="button-ht">START YOUR ADVENTURE</paper-button>
          </a>
          </div>
      </section>
      <section class="box-grid">
        <div class="">
          <div class="title">
            <h1>Leave your hunts in good hands</h1>
            <hr/>
          </div>
          <div class="content-grid">
            <div class="grid animation">
              <img src="./hunterfy/static/images/Enjoy Hunting Activities.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/Exclusive Acommodation.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“With the hunt you never know but I have hit you guys”</p>
              <span>Martín G.</span>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/Exclusive Services of Hunterfy.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/Friendly Hunters.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/Full Hunting Experience.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“Tremendous hunting day, what else can I say”
              </p>
              <span>Antonio D.</span>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/Gredos Ibex stalking.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“Highlight the personal service received and the team behind. Thank you”
              </p>
              <span>John AG.</span>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/Hunterfy senses.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/Hunting ibex spain.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/International Hunter.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/International Hunters.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“I feel your passion for hunting from beginning to end. Do not stop doing things like this. Thank you”</p>
              <span>Mary E.</span>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/Spanish Food with the best chef.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./hunterfy/static/images/Spanish Ibex Specimen.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“After so many years of hunting, I never imagined finding something so authentic and well done”</p>
              <span>James A.</span>
            </div>
          </div>
        </div>
      </section>
      <section class="choose-stalking">
        <div class="container">
          <div class="title">
            <h1>Choose your stalking from hundreds of offers</h1>
            <hr/>
            <p>Guarantee of shooting. No added fees</p>
          </div>
          <div class="content-grid">
            <div class="grid">
            </div>
            <div class="grid">
            </div>
            <div class="grid">
            </div>
            <div class="grid">
            </div>
          </div>
        </div>
      </section>
      <section class="hunting">
        <div class="container">
          <div class="title">
            <h1>Enjoy the hunting of yesterday with today's technology</h1>
          </div>
          <a href="[[ routePath ]]form">
            <paper-button class="button-ht">START</paper-button>
          </a>
        </div>
      </section>
      <section class="media">
        <div class="container">
          <img src="./hunterfy/static/images/all.jpg"/>
        </div>
      </section>
      <section class="linkbuild">
        <div class="container">
          <div class="content-grid">
            <div class="grid">
              <h4>What kind of stalking are you looking for?</h4>
              <hr/>
            </div>
            <div class="grid">
              <a href="/rececho-macho-montes" title="Recechos de Macho Montés">Ibex Stalking,</a>
              <a href="/rececho-macho-montes-gredos" title="Macho Montés de Gredos">Gredos Ibex Stalking,</a>
              <a href="/rececho-macho-montes-ronda" title="Macho Montés en Ronda">Ronda Ibex,</a>
              <a href="/rececho-macho-montes-beceite" title="Macho Montés en Beceite">Beceite Ibex,</a>
              <a href="/rececho-macho-montes-sierra-nevada" title="Macho Montés en Sierra Nevada">Sierra Nevada Ibex</a>
            </div>
            <br/>
            <div class="grid">
              <h4>Ibex Grand Slam's unique experience</h4>
              <hr/>
            </div>
            <div class="grid">
              <a href="/ibex-grand-slam-spain-offer" title=Grand Slam">Grand Slam</a>
            </div>
            <br/>
            <div class="grid">
              <h4>Verified hunting experiences</h4>
              <hr/>
            </div>
            <div class="grid">
              <a href="/Spanish-ibex-hunting-price.php" title="Spanish">Ibex hunting price,</a>
              <a href="/representative-ibex-offer" title="Oferta Beceite 6 años o 180 puntos">Beceite Offer 6 years or 180 points,</a>
              <a href="/gold-ibex-offer" title="Oro">Gold Offer</a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="footer">
          <div class="container">
            <div class="content-grid">
              <div class="grid">
                <h4>Hunterfy</h4>
                <ul>
                  <li>
                    <a href="/legal">Conditions</a>
                  </li>
                  <li>
                    <a href="/contacto">Contact us</a>
                  </li>
                  <li>
                    <a href="/oferta/rececho-macho-montes-beceite-representativo">Blog</a>
                  </li>
                </ul>
              </div>
              <div class="grid">
                <h4>Trustfulness</h4>
                <div class="payementmethod-grid">
                  <div class="grid">
                    <svg id="footer_pp" viewBox="0 22.5 120 75" width="100%" height="100%">
                      <path fill="#F9F9F9" d="M120,93.5c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4v-67c0-2.2,1.8-4,4-4h112c2.2,0,4,1.8,4,4V93.5z"></path>
                      <path fill="#003366" d="M57.5,53.9c-0.5,0-1.2,0.4-1.6,1c0,0-3.6,6.2-4,6.8c-0.2,0.3-0.4,0.1-0.4,0c0-0.2-1.1-6.7-1.1-6.7c-0.1-0.5-0.7-1-1.4-1h-2.2c-0.5,0-0.9,0.4-0.8,1c0,0,1.7,9.7,2.1,12c0.2,1.3,0,1.5,0,1.5l-2.2,3.9c-0.3,0.5-0.1,1,0.4,1h2.6c0.5,0,1.3-0.4,1.6-1l10-16.9c0,0,1-1.4,0.1-1.4C59.9,53.9,57.5,53.9,57.5,53.9"></path>
                      <path fill="#003366" d="M25.9,57.3c-0.8,0.6-1.8,0.8-3.2,0.8h-0.6c-0.5,0-0.9-0.4-0.8-1l0.8-3.3c0.1-0.5,0.7-1,1.2-1h0.8c1,0,1.7,0.2,2.2,0.5s0.7,0.8,0.7,1.5C27.1,56,26.7,56.8,25.9,57.3 M31.3,52.3c-0.3-0.6-0.8-1.1-1.4-1.5s-1.3-0.6-2.2-0.8c-0.8-0.2-1.8-0.2-3-0.2h-5.2c-0.5,0-1.1,0.4-1.2,1l-3.5,15.4c-0.1,0.5,0.2,1,0.8,1h2.5c0.5,0,1.1-0.4,1.2-1l0.9-3.7c0.1-0.5,0.7-1,1.2-1h0.7c3.1,0,5.5-0.6,7.2-1.9c1.7-1.3,2.6-2.9,2.6-5C31.8,53.7,31.7,52.9,31.3,52.3"></path>
                      <path fill="#003366" d="M43.4,54.5c-1-0.5-2.4-0.8-4.5-0.8c-1,0-2,0.1-3,0.2c-0.7,0.1-0.8,0.1-1.3,0.2c-1,0.2-1.1,1.2-1.1,1.2l-0.3,1.3c-0.2,0.8,0.3,0.8,0.5,0.7c0.4-0.1,0.6-0.2,1.5-0.4c0.8-0.2,1.7-0.3,2.4-0.3c1,0,1.8,0.1,2.3,0.3s0.8,0.6,0.8,1.1c0,0.1,0,0.3,0,0.4c0,0.1-0.1,0.2-0.4,0.2c-1.4,0.1-2.5,0.2-3.7,0.4s-2.3,0.5-3.2,0.9c-1,0.4-1.7,1-2.2,1.7s-0.7,1.6-0.7,2.6s0.3,1.8,1,2.4c0.7,0.6,1.6,0.9,2.6,0.9c0.7,0,1.2-0.1,1.6-0.1c0.4-0.1,0.8-0.2,1.2-0.4c0.3-0.1,0.7-0.3,1-0.6c0.4-0.2,0.6-0.4,0.9-0.6l0,0l-0.1,0.4l0,0l0,0c-0.1,0.5,0.2,0.9,0.7,0.9l0,0l0,0l0,0c0.3,0,1.4,0,1.9,0h0.4l0,0c0.5-0.1,1-0.5,1.1-0.9l1.8-7.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.5,0-0.6C44.9,55.9,44.4,55,43.4,54.5z M39,63.9c-0.3,0.2-0.6,0.4-1,0.5c-0.5,0.2-0.9,0.3-1.3,0.3c-0.6,0-1.1-0.1-1.4-0.3c-0.3-0.2-0.5-0.5-0.5-0.9c0-0.5,0.1-0.9,0.4-1.2c0.2-0.3,0.6-0.5,1.1-0.7s1-0.3,1.7-0.4c0.6-0.1,1.7-0.2,1.9-0.2c0.1,0,0.2-0.1,0.2,0.3c0,0.2-0.4,1.5-0.5,2.1C39.4,63.6,39.1,63.9,39,63.9z"></path>
                      <path fill="#336699" d="M89.1,54.5c-1-0.5-2.4-0.8-4.5-0.8c-1,0-2,0.1-3,0.2c-0.7,0.1-0.8,0.1-1.3,0.2c-1,0.2-1.1,1.2-1.1,1.2l-0.3,1.3c-0.2,0.8,0.3,0.8,0.5,0.7c0.4-0.1,0.6-0.3,1.5-0.4c0.8-0.2,1.7-0.3,2.4-0.3c1,0,1.8,0.1,2.3,0.3s0.8,0.6,0.8,1.1c0,0.1,0,0.2,0,0.4c0,0.1-0.1,0.2-0.4,0.2c-1.4,0.1-2.5,0.2-3.7,0.4s-2.3,0.5-3.2,0.9c-1,0.4-1.7,1-2.2,1.7s-0.7,1.6-0.7,2.6s0.3,1.8,1,2.4c0.7,0.6,1.6,0.9,2.7,0.9c0.7,0,1.2-0.1,1.6-0.1c0.4-0.1,0.8-0.2,1.2-0.4c0.3-0.1,0.7-0.3,1-0.6c0.4-0.2,0.6-0.4,0.9-0.6l0,0l-0.1,0.4l0,0l0,0c-0.1,0.5,0.2,0.9,0.7,0.9l0,0l0,0l0,0c0.3,0,1.4,0,1.9,0h0.4l0,0c0.5-0.1,1-0.5,1.1-0.9l1.8-7.9c0-0.2,0.1-0.4,0.1-0.7c0-0.2,0.1-0.5,0-0.6C90.5,55.9,90,55.1,89.1,54.5z M84.6,64c-0.3,0.2-0.6,0.4-1,0.5c-0.5,0.2-0.9,0.3-1.3,0.3c-0.6,0-1.1-0.1-1.4-0.3s-0.5-0.5-0.5-0.9c0-0.5,0.1-0.9,0.4-1.2c0.2-0.3,0.6-0.5,1.1-0.7s1-0.3,1.7-0.4c0.6-0.1,1.7-0.2,1.9-0.2c0.1,0,0.2-0.1,0.2,0.3c0,0.2-0.4,1.5-0.5,2.1C85,63.6,84.7,63.9,84.6,64z"></path>
                      <path fill="#336699" d="M71.5,57.4c-0.8,0.5-1.8,0.8-3.2,0.8h-0.6c-0.5,0-0.9-0.4-0.8-1l0.8-3.3c0.1-0.5,0.7-1,1.2-1h0.8c1,0,1.7,0.2,2.2,0.5s0.7,0.8,0.7,1.5C72.7,56,72.3,56.8,71.5,57.4 M76.9,52.4c-0.3-0.6-0.8-1.1-1.4-1.5c-0.6-0.4-1.3-0.6-2.2-0.8c-0.8-0.1-1.8-0.2-3-0.2H65c-0.5,0-1.1,0.4-1.2,1l-3.5,15.4c-0.1,0.5,0.2,1,0.8,1h2.5c0.5,0,1.1-0.4,1.2-1l0.9-3.7c0.1-0.5,0.7-1,1.2-1h0.7c3.1,0,5.5-0.6,7.2-1.9c1.7-1.3,2.6-2.9,2.6-5C77.4,53.7,77.3,53,76.9,52.4"></path>
                      <path fill="#336699" d="M97.7,50h-2.2l0,0l0,0c-0.5,0-1,0.4-1.2,0.9V51c0,0,0,0.2-0.1,0.6l-3.2,14c-0.1,0.3-0.1,0.5-0.1,0.6l0,0c-0.1,0.5,0.2,0.9,0.7,0.9l0,0h2.3c0.5,0,1-0.4,1.2-0.9c0,0,0,0,0-0.1l3.4-15.2l0,0C98.6,50.4,98.3,50,97.7,50z"></path>
                      <path fill="#336699" d="M101.1,53.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.2,0c-0.3,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.4-0.2-0.6V51h-0.3v-0.3h0.3V50h0.4v0.7h0.8V51h-0.8v1.1c0,0.1,0,0.2,0,0.3s0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.3,0c0.1,0,0.1,0,0.2,0s0.1,0,0.2,0l0,0V53.1z"></path>
                      <path fill="#336699" d="M105.2,53.1h-0.4v-1.4c0-0.1,0-0.2,0-0.3s0-0.2-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.1-0.3,0.2v0.1v0.1v1.6h-0.4v-1.4c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.1-0.3,0.2v1.8h-0.4v-2.4h0.4v0.3c0.1-0.1,0.3-0.2,0.4-0.2c0.1-0.1,0.3-0.1,0.4-0.1c0.2,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.3,0,0.5,0.1,0.6,0.2c0.1,0.2,0.2,0.4,0.2,0.7v1.3H105.2z"></path>
                    </svg>
                  </div>
                  <div class="grid">
                    <svg id="footer_vi" viewBox="0 22.5 120 75" width="100%" height="100%">
                      <rect y="38.6" fill="#F9F9F9" width="120" height="42.9"></rect>
                      <polygon fill="#0066B2" points="53 48.7 49.4 71.3 55.2 71.3 58.9 48.7 "></polygon>
                      <path fill="#0066B2" d="M91.2,48.7h-4.7c-2.2,0-2.7,1.7-2.7,1.7l-8.7,20.8h6.1l1.2-3.3h7.5l0.7,3.3H96L91.2,48.7z M84.1,63.3    l3.1-8.4l1.7,8.4C88.9,63.3,84.1,63.3,84.1,63.3z"></path>
                      <path fill="#0066B2" d="M67.3,55c0-2.5,5.7-2.2,8.2-0.8l0.8-4.8c0,0-2.6-1-5.3-1c-2.9,0-9.8,1.3-9.8,7.5c0,5.8,8.1,5.9,8.1,8.9c0,3.1-7.3,2.5-9.7,0.6l-0.9,5.1c0,0,2.6,1.3,6.6,1.3s10-2.1,10-7.7C75.5,58.1,67.3,57.5,67.3,55z"></path>
                      <path fill="#0066B2" d="M44.4,48.7l-5.6,15.5l-0.7-3.3l0,0c0,0-1.3-4.1-5.4-7.4c-0.9-0.7-1.7-1.3-2.6-1.8l5.1,19.6h6.1l9.3-22.5h-6.2V48.7z"></path>
                      <path fill="#0066B2" d="M120,38.6V26.5c0-2.2-1.8-4-4-4H4c-2.2,0-4,1.8-4,4v12.1H120z"></path>
                      <path fill="#F9A533" d="M0,81.4v12.1c0,2.2,1.8,4,4,4h112c2.2,0,4-1.8,4-4V81.4H0z"></path>
                      <path fill="#F9A533" d="M38.2,60.9l-2-10.1c0,0-0.2-2-2.8-2h-9.2l-0.1,0.4c0,0,4.4,0.9,8.7,4.4C36.9,56.8,38.2,60.9,38.2,60.9z"></path>
                    </svg>
                  </div>
                  <div class="grid">
                    <svg id="footer_mc" viewBox="0 22.5 120 75" width="100%" height="100%">
                      <path fill="#13457C" d="M120,93.5c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4v-67c0-2.2,1.8-4,4-4h112c2.2,0,4,1.8,4,4V93.5z"></path>
                      <circle fill="#FBB231" cx="74.4" cy="60" r="21.5"></circle>
                      <path fill="#EC1C2E" d="M58.9,74.9l-1-1.2h4.3c0.4-0.5,0.7-0.9,1.1-1.4h-6.5L56,71.1h8c0.3-0.5,0.5-0.9,0.8-1.4h-9.6l-0.5-1.2h10.7c0.2-0.5,0.4-0.9,0.5-1.4H54.1l-0.4-1.2h12.5c0.1-0.5,0.3-0.9,0.4-1.4h-3.9l0.2-1.2h3.8c0.1-0.5,0.1-0.9,0.2-1.4h-3.8l0.2-1.2H67c0-0.2,0-0.5,0-0.7c0-1-0.1-1.9-0.2-2.9H53.1l0.2-1.2h13.4c-0.1-0.5-0.2-1-0.3-1.4H53.6l0.4-1.2h12c-0.2-0.5-0.3-1-0.5-1.4h-11l0.5-1.2h10c-0.2-0.5-0.5-1-0.7-1.4h-8.5l0.7-1.2h7.1c-0.3-0.5-0.7-1-1-1.4h-5l1-1.2h3c-3.9-4.3-9.6-7.1-15.9-7.1C33.7,38.5,24,48.1,24,60s9.7,21.5,21.6,21.5c6.1,0,11.6-2.6,15.5-6.7L58.9,74.9L58.9,74.9z M53,60.7h1.3v1.2H53V60.7z"></path>
                      <polygon fill="#FFFFFF" points="77.2 65.4 77.3 65.5 79.1 65.5 79.1 65.4 77.3 65.4 77.3 65.4 77.2 65.4 77.2 65.5 77.3 65.5 77.2 65.4 "></polygon>
                      <polygon fill="#FFFFFF" points="77.3 64.6 77.3 64.5 77.2 64.7 77.2 64.8 77.2 65.1 77.2 65.4 77.3 65.4 77.3 65.1 77.3 64.8 77.3 64.7 77.3 64.6 77.3 64.5 77.3 64.6 "></polygon>
                      <polygon fill="#FFFFFF" points="74.5 65.5 74.5 65.5 74.7 65.6 74.9 65.6 75.1 65.6 75.3 65.6 75.5 65.5 75.7 65.5 75.9 65.4 76.1 65.4 76.3 65.3 76.5 65.2 76.7 65.1 76.8 65 77 64.9 77.1 64.8 77.2 64.7 77.3 64.6 77.3 64.5 77.2 64.6 77.1 64.7 76.9 64.8 76.8 65 76.6 65 76.5 65.1 76.3 65.2 76.1 65.3 75.9 65.3 75.7 65.4 75.5 65.4 75.3 65.5 75.1 65.5 74.9 65.5 74.7 65.5 74.5 65.4 74.5 65.4 74.5 65.5 "></polygon>
                      <polygon fill="#FFFFFF" points="47 59.6 47.1 59.5 47.2 59.5 47.5 59.3 48.2 59.3 48.5 59.3 49.9 59.4 50.3 57.6 49.6 57.5 48.2 57.4 47.5 57.4 47.1 57.4 46.7 57.5 46.4 57.5 46.1 57.6 45.8 57.7 45.6 57.8 45.3 58 45.1 58.2 45 58.4 44.8 58.6 44.7 58.8 44.6 59 44.6 59.3 44.5 59.6 44.5 59.9 44.5 60.3 44.5 60.7 44.7 61.1 44.9 61.4 45.1 61.6 45.4 61.8 45.7 62 46 62.1 46.5 62.3 46.8 62.4 47 62.5 47.1 62.6 47.2 62.8 47.3 62.9 47.3 63.1 47.2 63.3 47.2 63.4 47.1 63.5 47 63.6 46.9 63.6 46.8 63.7 46.6 63.7 46.4 63.7 45.8 63.7 45.4 63.7 43.9 63.4 43.6 65.1 43.5 65.2 44 65.3 44.5 65.5 45.2 65.5 46.6 65.6 46.8 65.5 47.3 65.5 47.8 65.4 48 65.3 48.3 65.2 48.5 65.1 48.8 65 49 64.8 49.2 64.6 49.3 64.4 49.5 64.1 49.6 63.8 49.7 63.5 49.8 63.2 49.8 62.7 49.8 62.3 49.7 62 49.6 61.7 49.4 61.4 49.2 61.2 49 61.1 48.8 60.9 47.6 60.5 47.4 60.4 47.2 60.3 47.1 60.2 47 60.1 47 59.9 47 59.8 47 59.8 "></polygon>
                      <polygon fill="#FFFFFF" points="53.3 63.7 53 63.8 52.8 63.7 52.7 63.7 52.4 63.6 52.4 63.6 52.3 63.5 52.3 63.4 52.3 63.3 53 59.3 54.2 59.4 54.5 57.5 53.3 57.5 53.6 55.8 51.4 55.8 50 63.8 49.9 64.1 50 64.5 50 64.6 50 64.8 50.1 64.9 50.2 65 50.3 65.1 50.4 65.2 50.6 65.3 50.7 65.4 50.9 65.4 51.2 65.5 51.7 65.5 52.3 65.5 52.9 65.4 53.3 65.3 53.6 65.1 53.9 63.7 53.9 63.6 53.7 63.6 "></polygon>
                      <path fill="#FFFFFF" d="M60,63.4l-0.2,0.1l-0.4,0.1l-0.6,0.1h-0.4H58h-0.4l-0.5-0.1L57,63.5l-0.2-0.2l-0.2-0.2L56.5,63l-0.2-0.2l-0.2-0.3v-0.1v-0.1v-0.1h4.7v-0.5l0.1-0.6l0.1-0.6V60l0-0.5l-0.1-0.4l-0.2-0.3l-0.2-0.3l-0.2-0.3L60,58l-0.3-0.2l-0.3-0.1l-0.2-0.2h-0.3l-0.3-0.1h-0.3H58h-0.6l-0.6,0.1l-0.5,0.1l-0.4,0.2L55.5,58l-0.3,0.3l-0.3,0.3l-0.2,0.3l-0.2,0.3l-0.2,0.3l-0.1,0.3L54,60.2v0.3l-0.1,0.3l-0.1,0.5v0.6v0.5l0.1,0.5l0.1,0.4l0.2,0.4l0.2,0.3l0.3,0.3l0.3,0.3l0.3,0.2l0.3,0.2l0.4,0.1l0.4,0.1l0.4,0.1l0.4,0.1h0.4h0.6h0.4l0.7-0.1l0.4-0.1l0.5-0.2l0.3-0.1l0.3-2.1L60,63.4zM56.4,60.5L56.4,60.5l0.1-0.4l0.1-0.2l0.2-0.2l0.2-0.2l0.2-0.1l0.2-0.1h0.2h0.1h0.2l0.2,0.1l0.1,0.1l0.2,0.1l0.1,0.1l0.1,0.2l0.1,0.2v0.1v0.3v0.1L56.4,60.5L56.4,60.5z"></path>
                      <polygon fill="#FFFFFF" points="72.3 63 72.1 63.1 72 63.2 71.8 63.2 71.5 63.3 71.1 63.4 70.6 63.4 70.2 63.4 69.7 63.3 69.5 63.2 69.3 63.1 69.1 63 68.9 62.8 68.8 62.7 68.6 62.5 68.5 62.3 68.5 62.1 68.4 61.9 68.3 61.7 68.3 61.2 68.3 60.9 68.4 60.4 68.5 60 68.6 59.6 68.8 59.2 68.9 58.9 69.1 58.6 69.3 58.4 69.5 58.2 69.7 58.1 69.9 58 70 57.9 70.2 57.8 70.4 57.7 70.8 57.7 71.5 57.7 71.9 57.7 72.3 57.8 72.8 57.9 73.4 58.2 73.8 56 73.2 55.8 72.3 55.5 71.6 55.5 71.2 55.4 70.6 55.5 70.4 55.5 69.9 55.6 69.4 55.7 69 55.8 68.5 56 68.3 56.1 68 56.4 67.8 56.5 67.5 56.8 67.2 57.2 66.9 57.6 66.8 57.8 66.6 58.2 66.4 58.7 66.2 59.2 66 59.7 65.9 60.3 65.8 61 65.8 61.5 65.9 62.1 65.9 62.6 66.1 63 66.3 63.4 66.5 63.8 66.7 64.1 67 64.4 67.3 64.7 67.6 64.9 67.9 65.1 68.3 65.3 68.6 65.4 69 65.4 69.3 65.5 69.7 65.5 70.1 65.5 70.7 65.5 71 65.5 71.4 65.4 71.7 65.3 71.9 65.2 72.3 64.9 72.6 62.9 72.4 62.8 "></polygon>
                      <path fill="#FFFFFF" d="M90.8,55.8l-0.5,2.7l-0.1-0.1l-0.3-0.3L89.8,58l-0.3-0.2l-0.2-0.1L89,57.6h-0.2h-0.2h-0.2h-0.3h-0.3l-0.3,0.1l-0.3,0.1l-0.3,0.1l-0.3,0.2l-0.3,0.2L86,58.5l-0.2,0.2L85.6,59l-0.2,0.3l-0.2,0.3L85,60l-0.2,0.4l-0.1,0.4l-0.1,0.4l-0.1,0.4V62v0.4v0.4l0.1,0.4l0.1,0.4l0.1,0.4l0.2,0.3l0.2,0.3l0.2,0.3l0.2,0.3l0.3,0.2l0.3,0.2l0.3,0.1l0.4,0.1h0.4h0.1h0.2l0.4-0.1l0.3-0.1l0.1-0.1l0.1-0.1l0.3-0.2l0.3-0.2l0.1-0.1l-0.1,0.6h2.2l1.7-9.6v-0.1C93,55.8,90.8,55.8,90.8,55.8zM88.3,59.5l0.2-0.1h0.2h0.2h0.2h0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.2l0.1,0.2v0.2v0.2V61v0.2v0.2v0.2v0.2L89.9,62l-0.1,0.2l-0.1,0.2l-0.2,0.1l-0.1,0.2l-0.1,0.2L89.2,63l-0.1,0.1L89,63.3l-0.1,0.1l-0.2,0.1h-0.2l-0.2,0.1h-0.2h-0.2l-0.3-0.1l-0.2-0.2l-0.2-0.2l-0.1-0.3L87,62.6l-0.1-0.4v-0.3v-0.3v-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1L88.3,59.5z"></path>
                      <path fill="#FFFFFF" d="M44.2,59.7v-0.3v-0.3l-0.1-0.2L44,58.6l-0.2-0.2l-0.2-0.2L43.4,58l-0.2-0.1L43,57.8l-0.2-0.1l-0.2-0.1l-0.3-0.1h-0.2h-0.2h-0.2h-1.2h-0.8L39,57.6l-0.4,0.1l-0.4,0.1l-0.6,2l0.4-0.2l0.3-0.1l1-0.2l0.7-0.1h0.5h0.6h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1v0.1v0.1l-0.1,0.2h-0.2h-0.2H41h-0.8L39,60.5l-0.3,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1L37.9,61l-0.2,0.2l-0.2,0.2l-0.2,0.2l-0.2,0.2L37,62l-0.1,0.2l-0.1,0.3l-0.1,0.3v0.3v0.3v0.2v0.2l0.1,0.3v0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.3,0.1l0.4,0.1h0.4h0.2l0.4-0.1l0.4-0.1l0.4-0.2l0.3-0.2l0.1-0.1l-0.1,0.3h2l0.3-1.7l0.7-3.8L44.2,59.7zM41.3,63L41.3,63l-0.1,0.2l-0.1,0.1L41,63.4l-0.1,0.1h-0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1h-0.2h-0.2h-0.2h-0.2h-0.1h-0.1h-0.1l-0.1-0.1l-0.2-0.2L39,63.4v-0.2V63v-0.1v-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1h0.1l0.1-0.1H40h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1H41h0.1h0.1h0.1h0.1h0.1h0.1h0.1l0,0l0,0l0,0v0.2v0.2l-0.1,0.2l-0.1,0.2v0.1L41.3,63L41.3,63z"></path>
                      <polygon fill="#FFFFFF" points="33.8 55.8 31.6 61.1 31.3 55.8 27.6 55.8 26 65.4 25.9 65.5 28.1 65.5 29.3 58.8 29.7 65.1 29.7 65.5 32.1 65.5 34.8 58.9 33.7 65.5 35.9 65.5 37.6 55.8 "></polygon>
                      <path fill="#FFFFFF" d="M80.2,59.7v-0.3l-0.1-0.3L80,58.9v-0.2l-0.2-0.2l-0.2-0.2l-0.2-0.2L79.2,58L79,57.9l-0.2-0.1l-0.2-0.1l-0.2-0.1l-0.2-0.1H78h-0.2h-0.2h-0.2H77h-0.2h-0.2h-0.2h-0.2H76h-0.2h-0.2h-0.2h-0.2H75l-0.2,0.1l-0.2,0.1l-0.2,0.1l0,0l0,0l-0.5,1.8H74h0.1l0.1-0.1h0.1h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2l0,0h0.2h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1v0.2l0,0v0.1v0.1v0.1l0,0h-0.1h-0.1h-0.1h-0.2h-0.2h-0.2h-0.2h-0.1h-0.1h-0.1h-0.1h-0.1h-0.1H76h-0.1h-0.1h-0.1h-0.1h-0.1h-0.1h-0.1l0,0l0,0H75l-0.2,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1L74,61l-0.2,0.2l-0.2,0.2l-0.2,0.2l-0.2,0.2L73.1,62L73,62.3l-0.1,0.2l-0.1,0.3v0.3v0.3v0.2v0.2V64v0.2v0.2l0.1,0.2l0.1-0.1l0.1,0.2l0.1,0.2l0.1,0.1l0.1,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.3,0.1l0,0l0,0h0.2h0.2h0.2h0.2h0.2h0.2l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1v0.1v0.2v0.3v0.3h1.8l0,0l0,0l0,0l0.3-1.6l0.8-3.8L80.2,59.7zM77.6,62.1v0.2v0.2v0.2v0.1v0.1V63l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.2,0l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.2,0.1l-0.2,0.1h-0.2h-0.2h-0.2h-0.1h-0.1h-0.1l-0.1-0.1l-0.2-0.3L75,63.4v-0.2V63v-0.1v-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1h0.1H76h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1H77h0.1h0.1h0.1h0.1h0.1L77.6,62.1L77.6,62.1l0.2-0.1l0,0l0,0L77.6,62.1z"></path>
                      <polygon fill="#FFFFFF" points="84.9 59.5 85.1 59.5 85.5 57.4 84.9 57.5 84.8 57.5 84.4 57.6 84.2 57.7 83.9 57.9 83.7 58.1 83.4 58.3 83.3 58.5 83.4 57.5 81.2 57.5 79.8 65.4 79.8 65.5 82.1 65.5 82.8 61.3 82.9 61 83 60.7 83 60.5 83.2 60.2 83.3 60.1 83.4 60 83.6 59.9 83.7 59.8 83.9 59.7 84.1 59.6 84.3 59.6 84.6 59.5 "></polygon>
                      <polygon fill="#FFFFFF" points="66.3 58 66.7 57.5 66.5 57.5 66.3 57.5 66.3 57.5 66.2 57.4 65.7 57.5 65.5 57.5 65.3 57.6 65.1 57.6 64.8 57.8 64.6 58 64.4 58.1 64.2 58.3 64.1 58.5 64.3 57.5 62 57.5 60.6 65.4 60.6 65.5 62.9 65.5 63.6 61.3 63.7 60.8 63.8 60.6 63.8 60.4 63.9 60.3 64 60.2 64.2 60 64.4 59.9 64.6 59.8 64.8 59.8 65 59.7 65.2 59.7 65.5 59.7 65.8 59.7 66.1 58.4 "></polygon>
                    </svg>
                  </div>
                  <div class="grid">
                    <svg id="footer_am" viewBox="0 22.5 120 75" width="100%" height="100%">
                      <path fill="#F9F9F9" d="M120,93.5c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4v-67c0-2.2,1.8-4,4-4h112c2.2,0,4,1.8,4,4V93.5z"></path>
                      <polygon fill="#0073A5" points="77.1 75.3 86.1 75.3 86.1 72.9 79.8 72.9 79.8 70.7 85.9 70.7 85.9 68.6 79.8 68.6 79.8 66.5 86.1 66.5 86.1 64.1 77.1 64.1 "></polygon>
                      <path fill="#0073A5" d="M103.5,68.4c-0.2,0-1.7-0.1-1.9-0.1c-0.7-0.1-1.2-0.2-1.2-0.9c0-1.1,1-1,2-1h4.2V64h-5.8c-1.8,0-3.3,1.2-3.3,3.3c0,1.9,0.7,3.4,3.8,3.5c0.2,0,1.5,0.1,1.9,0.1c0.8,0.1,1,0.4,1,0.9c0,1.1-1.1,1.1-1.9,1.1h-4.5v2.4h5.8c1.8,0,3.5-1.1,3.5-3.2C107.2,70.3,106.9,68.6,103.5,68.4z"></path>
                      <path fill="#0073A5" d="M93.1,68.4c-0.2,0-1.7-0.1-1.9-0.1c-0.7,0-1.2-0.1-1.2-0.8c0-1.1,1-1,2-1h4.2v-2.4h-5.8c-1.8,0-3.3,1.2-3.3,3.3c0,1.9,0.7,3.4,3.8,3.5c0.2,0,1.5,0.1,1.9,0.1c0.8,0.1,1,0.4,1,0.9c0,1.1-1.1,1.1-1.9,1.1h-4.5v2.4h5.8c1.8,0,3.5-1.1,3.5-3.2C96.8,70.3,96.5,68.6,93.1,68.4z"></path>
                      <path fill="#0073A5" d="M60.4,64.1h-9.7l-3.2,3.5l-3.1-3.5H33.6v11.2h10.5l3.3-3.7l3.2,3.7H56v-3.8h3.7c1.4,0,4,0,4-4C63.7,64.7,61.8,64.1,60.4,64.1z M42.7,72.9h-6.4v-2.2h6.1v-2.1h-6.1v-2.1H43l2.7,3.1L42.7,72.9z M53.3,74.2l-4-4.7l4-4.4V74.2zM59.5,69.2H56v-2.7h3.4c1.2,0,1.5,0.7,1.5,1.3C61,68.5,60.6,69.2,59.5,69.2z"></path>
                      <path fill="#0073A5" d="M75.6,67.1c0-2.4-2-3-3.3-3h-7.2v11.2h2.8v-4h3.6c1,0,1.3,1,1.4,1.9l0.1,2.1h2.7L75.6,73c0-1.8-0.5-2.7-1.8-2.8C75.2,69.5,75.6,68.5,75.6,67.1z M71.3,69h-3.4v-2.5h3.4c1.2,0,1.5,0.7,1.5,1.3C72.9,68.5,72.5,69,71.3,69z"></path>
                      <rect x="66.3" y="44.7" fill="#0073A5" width="2.8" height="11.2"></rect>
                      <polygon fill="#0073A5" points="52.7 53.6 46.4 53.6 46.4 51.3 52.5 51.3 52.5 49.2 46.4 49.2 46.4 47.1 52.7 47.1 52.7 44.7 43.7 44.7 43.7 55.9 52.7 55.9 "></polygon>
                      <path fill="#0073A5" d="M64.8,47.7c0-2.4-2-3-3.3-3h-7.2v11.2h2.8v-4h3.6c1,0,1.3,1,1.4,1.9l0.1,2.1h2.7l-0.1-2.3c0-1.8-0.5-2.7-1.8-2.8C64.4,50.1,64.8,49.1,64.8,47.7z M60.5,49.6h-3.4v-2.5h3.4c1.2,0,1.5,0.7,1.5,1.3C62.1,49.1,61.7,49.6,60.5,49.6z"></path>
                      <path fill="#0073A5" d="M39,47.7v8.2h2.8V44.7h-4.4L34,52.2l-3.4-7.5h-4.3v10.8l-4.8-10.8h-3.6L13,55.9h2.9l1.1-2.5h5.5l1.1,2.5H29v-8.3l3.7,8.3h2.5L39,47.7z M17.9,51l1.6-3.9l1.7,3.9H17.9z"></path>
                      <path fill="#0073A5" d="M74.8,55.9h3.6l1.1-2.5H85l1.1,2.5h5.4v-8.2l5,8.2h3.8V44.7h-2.8v7.8l-4.6-7.8h-4.1v10.5L84,44.7h-3.6l-3.8,8.7c0,0-1.6,0-1.8,0c-0.7-0.1-1.7-0.6-1.7-2.6V50c0-2.6,1.4-2.8,3.3-2.8h1.7v-2.4h-3.6c-1.3,0-4,1-4.1,5.6C70.3,53.4,71.7,55.9,74.8,55.9z M82.2,47.1l1.7,3.9h-3.4L82.2,47.1z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="grid">
                <h4>Community</h4>
                <div class="network-socials">
                  <div class="grid">
                    <a href="https://www.facebook.com/HunterfySpain/" target="_blank">
                      <iron-icon icon="app-icons:facebook"></iron-icon>
                      Facebook
                    </a>
                  </div>
                  <div class="grid">
                    <a href="https://www.facebook.com/HunterfySpain/" target="_blank">
                      <iron-icon icon="app-icons:youtube"></iron-icon>
                      Youtube
                    </a>
                  </div>
                  <div class="grid">
                    <a href="https://www.instagram.com/hunterfy/" target="_blank">
                      <iron-icon icon="app-icons:instagram"></iron-icon>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
              <div class="grid" style="text-align: center">
                <h3>Doubts? Contact Us</h3>
                <p>
                  <a href="tel:+34649613609">+34 649 613 609</a>
                </p>
                <p>You can also write to our email address:</p>
                <a href="mailto:hello@hunterfy.com?subject=feedback">hello@hunterfy.com</a>
              </div>
            </div>
          </div>
        </div>
        <div class="micro-footer">
          <div class="container">
            <div class="content-grid">
              <div class="grid">
                <a href="/legal">Terms &amp; Condition</a>
              </div>
              <div class="grid">
                <a href="/cookies">Cookies</a>
              </div>
              <div class="grid">
                <a href="/privacy-policies">Privacy Policies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `; 
  }
  static get properties(){
    return {
    }
  }
  ready(){
    super.ready();
    
    this.$.blank.style = `height: ${this.pt}px;`;

    this.OneCount   = 0;
    this.TwoCount   = 125900;
    this.ThirdCount = 1300;

    let intervalOne = setInterval(() => {
      this.OneCount   += 1;
      this.$.OneCount.innerHTML   = this.OneCount.toLocaleString();
      if(this.OneCount === 108)
        clearInterval(intervalOne);
    }, 1);
    let intervalTwo = setInterval(() => {
      this.TwoCount   += 1;
      this.$.TwoCount.innerHTML   = this.TwoCount.toLocaleString();
      if(this.TwoCount === 126000)
        clearInterval(intervalTwo);
    }, 1);
    let intervalThird = setInterval(() => {
      this.ThirdCount += 1;
      this.$.ThirdCount.innerHTML = this.ThirdCount.toLocaleString();
      if(this.ThirdCount === 1404)
        clearInterval(intervalThird);
    }, 1);
  }
}

window.customElements.define('app-landing', Landing);