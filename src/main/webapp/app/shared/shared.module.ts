import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjetRestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProjetRestSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProjetRestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjetRestSharedModule {
  static forRoot() {
    return {
      ngModule: ProjetRestSharedModule
    };
  }
}
