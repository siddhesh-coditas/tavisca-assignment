import { LitElement, html, customElement, property, css } from 'lit-element';

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
          button { background-color: transparent; border: none; outline: none; font-size: 25px; color: #fff; font-weight: 900 }
        `;
    }

    render() {
        return html`<button class="${this.theme}" @click="${this.customClick}" type="checkbox"> ${this.theme === 'dark' ? '☼' : '☽'} </button>`;
    }
}