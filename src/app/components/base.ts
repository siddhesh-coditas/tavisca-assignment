import { CustomDropdownElement } from '../elements/custom-dropdown/custom-dropdown';
import { ItemCardElement } from '../elements/item-card/custom.item-card';
import { ToggleButtonElement } from '../elements/toggle-button/toggle-button';
import { LocalServiceService } from '../services/local-service.service';

console.assert(CustomDropdownElement !== undefined);
console.assert(ToggleButtonElement !== undefined);
console.assert(ItemCardElement !== undefined);

export class BaseComp {
  i18n: any;
  constructor(public locService: LocalServiceService) {
    this.i18n = this.locService.getLocalText;
  }

  public getFormValidationErr(key) {
    return this.i18n(key) + this.i18n('common.form-validation.postfix');
  }
}
