import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-paybill`
 * paybill templates
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyPaybill extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-paybill',
      },
    };
  }
}

window.customElements.define('my-paybill', MyPaybill);
