import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { ItemCardModel } from 'src/app/components/item/item-card/item-card.model';

@customElement('cc-item-card')
export class ItemCardElement extends LitElement {
  @property()
  item: ItemCardModel;

  @property()
  isAllItem: boolean = false;

  constructor() {
    super();
  }

  render() {
    return html`
      <link rel='stylesheet' href='assets/lit-elem-styles/custom.item-card.css'>
      <div @click="${this.inputHandler}" @keydown="${this.inputHandler}" class="custom-item-card" tabindex="0">
        <div class="item-image-container">
            <img class="item-img" src="${this.item.imgUrl}" alt="${this.item.name}" />
        </div>
        <div class="item-detail-container">
            <div class="item-name">${this.item.name}</div>
            <div class="item-desc">${this.item.description}</div>
            <div class="item-price">
              <span>$${this.item.price}</span>
              <div class="action-btn-container" *ngIf="!cartView">
                  ${this.isAllItem 
                  ? html`<custom-button @customBtnTrigger="${this.addItemToUser}" btnType="link" btnId='go-to-register' btnName='go-to-register' btnLabel='Add To My Item'></custom-button>` 
                  : html`<custom-button @customBtnTrigger="${this.onUpdate}" btnType="link" btnId='go-to-register' btnName='go-to-register' btnLabel='Update'></custom-button>`}
              </div>
            </div>
        </div>
      </div>
    `;
  }

  inputHandler() {
    this.dispatchEvent(
      new CustomEvent('openCardDetail', {})
    );
  }

  addItemToUser() {
    this.dispatchEvent(
      new CustomEvent('addItemToUser', {})
    );
  }

  onUpdate() {
    this.dispatchEvent(
      new CustomEvent('updateItem', {})
    );
  }
}
