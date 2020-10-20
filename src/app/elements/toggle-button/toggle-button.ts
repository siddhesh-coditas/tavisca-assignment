import { LitElement, html, customElement } from 'lit-element';

@customElement('custom-toggle')
export class ToggleButtonElement extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`<input type="checkbox"> Dark`
    }
}