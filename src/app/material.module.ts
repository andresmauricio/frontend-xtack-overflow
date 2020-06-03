import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatIconModule, MatCardModule],
  exports: [MatToolbarModule, MatIconModule, MatCardModule]
})
export class MaterialModule { }
