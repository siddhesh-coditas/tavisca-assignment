import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';

@customElement('custom-toggle')
export class ToggleButtonElement extends LitElement {
  @property()
  theme = 'light';

  @property()
  customClick = () => null;

  constructor() {
    super();
  }

  static get styles() {
    return css`
      button {
        background-color: transparent;
        border: none;
        font-size: 25px;
        color: #fff;
        font-weight: 900;
      }
    `;
  }

  render() {
    return html`<button
      class="${this.theme}"
      aria-label="${this.theme}"
      @click="${this.customClick}">
      <span aria-hidden=true>
    ${this.theme === 'dark' ? '☼' : '☽'}
    </span>
    </button>`;
  }
}
