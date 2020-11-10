import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { ItemCardModel } from 'src/app/components/item/item-card/item-card.model';

@customElement('cc-item-card')
export class ItemCardElement extends LitElement {
  @property()
  item: ItemCardModel;

  @property()
  cardClick = () => null;

  @property()
  cardKeydown = () => null;

  constructor() {
    super();
  }

  static get styles() {
    return css`
    .custom-item-card {
        border: 2px solid var(--foreground-border);
        border-radius: 15px 0 15px 0;
        padding: 10px;
        margin: auto;
        color: var(--foreground-text-primary);
        outline: none;
    }
    .custom-item-card:focus {
        border-color: red;
    }
    .custom-item-card .item-image-container {
        border-bottom: 2px solid var(--foreground-border);
        padding-bottom: 5px;
        margin-bottom: 5px;
        text-align: center;
    }
    .custom-item-card .item-detail-container>*:not(:last-child) {
        margin-bottom: 5px
    }
    .custom-item-card .item-detail-container .item-name {
        font-weight: 700;
        margin-botton: 5px;
    }
    .custom-item-card .item-detail-container .item-desc {
        font-size: 12px;
        color: var(--foreground-text-secondary); 
    }
    `;
  }

  render() {
    return html`
      <div @click="${this.cardClick}" @keydown="${this.cardKeydown}" class="custom-item-card" tabindex="0">
        <div class="item-image-container">
            <img class="item-img" src="${this.item.imgUrl}" alt="${this.item.name}" />
        </div>
        <div class="item-detail-container">
            <div class="item-name">${this.item.name}</div>
            <div class="item-desc">${this.item.description}</div>
            <div class="item-price">$${this.item.price}</div>
        </div>
      </div>
    `;
  }
}
