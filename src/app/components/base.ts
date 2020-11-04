import { LocalServiceService } from '../services/local-service.service';

export class BaseComp {
  i18n: any;
  constructor(public locService: LocalServiceService) {
    this.i18n = this.locService.getLocalText;
  }

  public getFormValidationErr(key) {
    return this.i18n(key) + this.i18n('common.form-validation.postfix');
  }
}
