import { NgModule } from '@angular/core';

import { ProjetRestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ProjetRestSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ProjetRestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProjetRestSharedCommonModule {}
