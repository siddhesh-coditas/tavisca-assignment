import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';

@customElement('custom-button')
export class CustomButtonElement extends LitElement {
  @property()
  btnId: string;
  @property()
  btnName: string;
  @property()
  btnLabel: string;
  @property()
  btnType: string;
  @property()
  isSubmit: boolean;

  constructor() {
    super();
  }

  render() {
    return html`
    <link rel='stylesheet' href='assets/lit-elem-styles/custom.button.css'>
      <div class="custom-button-element">
        <button @click=${this.inputHandler} class="custom-button ${this.getButtonTypeClass()}" type="${this.isSubmit ? 'submit' : 'button'}" name="${this.btnName}" id="${this.btnId}">${this.btnLabel}</button>
      </div>
    `;
  }

  getButtonTypeClass() {
      switch(this.btnType) {
        case 'secondary': return 'button-secondary';
        case 'link': return 'button-link';
        case 'primary': 
        default: return 'button-primary';
    }
  }

  inputHandler(event) {
    this.dispatchEvent(
      new CustomEvent('customBtnTrigger', {
        detail: {
            name: this.btnName
        },
      })
    );
  }
}
