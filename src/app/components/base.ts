import { CustomButtonElement } from '../elements/custom-buttons/custom.button';
import { CustomDropdownElement } from '../elements/custom-dropdown/custom.dropdown';
import { CustomInputTextElement } from '../elements/custom-input/custom.input';
import { ItemCardElement } from '../elements/item-card/custom.item-card';
import { ToggleButtonElement } from '../elements/toggle-button/toggle-button';
import { LocalServiceService } from '../services/local-service.service';

const CUSTOM_LIT_ELEMS = [
  CustomDropdownElement,
  ToggleButtonElement,
  ItemCardElement,
  CustomInputTextElement,
  CustomButtonElement
];

export class BaseComp {
  i18n: any;
  constructor(public locService?: LocalServiceService) {
    this.i18n = this.locService.getLocalText;
  }

  public getFormValidationErr(key) {
    return this.i18n(key) + this.i18n('common.form-validation.postfix');
  }
}
