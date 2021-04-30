import {NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AcumuladorComponent } from './acumulador/acumulador.component';

@NgModule({
  declarations: [
    AcumuladorComponent,
  ],
  // imports: [ 
  //   CommonModule 
  // ],
  exports: [
    AcumuladorComponent
  ],
  providers: [],
})
export class AcumuladorModule {}