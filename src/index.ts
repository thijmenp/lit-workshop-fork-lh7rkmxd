import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { sendMessage, onMessagesUpdated } from './room-connection';


@customElement('lit-app')
class App extends LitElement {
  @property({type: String})
  title = 'Chat application!';

  static styles = css`
    :host {
      font-family: sans-serif;
      display: block;
      padding: 20px;
    }

    h1 {
      color: #00a667;
    }
  `;

  render() {
    return html`
      <h1>${this.title}</h1>
      <!-- Place your custom elements here! -->
    `;
  }
}

































/**



  👀 Looking for an internship or job at the best employer in the Netherlands? 👀
                        👉 https://arcady.nl/ 👈



*/
