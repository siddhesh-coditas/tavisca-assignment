import { css, html, LitElement } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { CustomOptionModel, DropdownSides, getDropdownSideClass } from './dropdown-model';

@customElement('custom-dropdown')
export class CustomDropdownElement extends LitElement {
  @property()
  btnId: string;
  @property()
  btnLabel: string;
  @property()
  ariaLabel = '';
  @property()
  optionList: any[] = [];
  @property()
  addArrowHead: boolean = false;
  @property()
  side: DropdownSides = DropdownSides.TOP;

  isHide: boolean = false;

  constructor() {
    super();
  }

  render() {
    return html`
    <link href="assets/lit-elem-styles/custom.dropdown.css" rel="stylesheet">
    <div class="custom-dropdown">
      <div class="dd-btn-label" tabindex='0' role="combobox" @click="${this.toggleDropdownList.bind(this)}"
      @keydown="${this.toggleDropdownList.bind(this)}" aria-label="${this.ariaLabel}">
        ${this.btnLabel}
      </div>
      ${this.isHide ? this.addDropdownList() : ''}
    </div>`;
  }

  private addDropdownList() {
    return html`
    <ul class="dd-option-list ${this.addArrowHead ? 'arrow' : ''} @focusout='${this.hideList}' ${getDropdownSideClass(this.side)}" role="listbox">
      ${this.optionList.length ? this.optionList.map(
        (e: CustomOptionModel, idx: number) =>
          html`<li class="dd-option-item" role="option" value=${e.value}>
            <custom-button @customBtnTrigger="${this.onOptionList.bind(this, e.value)}" btnId='${this.btnId+'-option-'+idx}' btnName='${this.btnId+'-option-'+idx}' btnLabel='${e.label}'></custom-button>
          </li>`): []}
    </ul>
    `
  }

  private hideList() {
    this.isHide = false;
    this.requestUpdate();
  }

  private onOptionList(value: string, event) {
    this.dispatchEvent(
      new CustomEvent('onDropdownOptionSelected', {
        detail: { 
            value
        },
      })
    );
    this.isHide = false;
    this.requestUpdate();
  }

  private toggleDropdownList(event) {
    if (event.type === 'click' || (event.type === 'keydown' && (event.keyCode === 32 || event.keyCode === 13))) {
      event.preventDefault();
      this.isHide = !this.isHide;
      this.requestUpdate();
    }
  }
}
