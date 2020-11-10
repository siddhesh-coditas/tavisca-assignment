import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';

@customElement('custom-itextinput')
export class CustomInputTextElement extends LitElement {
  @property()
  inputId: string;
  @property()
  inputName: string;
  @property()
  inputLabel: string;
  @property()
  inputType: string;
  @property()
  inputPlaceholder: string;
  @property()
  isResizable: boolean;
  @property()
  cols: number;
  @property()
  rows: number;


  @property()
  cardClick = () => null;

  constructor() {
    super();
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <div class="custom-input-element">
        ${this.getInputTemplate(this.inputType)}
      </div>
    `;
  }

  getInputTemplate(type) {
      switch(type) {
        case 'textarea': {
            return html`
            <fieldset>
                <legend>
                <label class="custom-input-label" for="custom-input-${this.inputId}">${this.inputLabel}</label>
                </legend>
                <textarea
                style="resize: ${!this.isResizable ? 'none' : 'auto'};"
                cols="${this.cols ? this.cols : 30 }" rows="${this.rows ? this.rows : 30 }"
                @input=${this.inputHandler}
                id="custom-input-${this.inputId}"
                name="${this.inputName}"
                placeholder="${this.inputPlaceholder}"></textarea>
                <slot></slot>
            </fieldset>`;
        }
        case 'email':
        case 'text':
        case 'password':
        default: {
            return html`
            <fieldset>
                <legend>
                <label class="custom-input-label" for="custom-input-${this.inputId}">${this.inputLabel}</label>
                </legend>
                <input
                @input=${this.inputHandler}
                id="custom-input-${this.inputId}"
                name="${this.inputName}"
                type="${this.inputType}"
                placeholder="${this.inputPlaceholder}" />
                <slot></slot>
            </fieldset>`;
        }
    }
  }

  inputHandler(event) {
    this.dispatchEvent(
      new CustomEvent('input-val-change', {
        detail: { 
            value: event.composedPath()[0].value,
            name: this.inputName
        },
      })
    );
  }
}
