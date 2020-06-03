import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { MaterialModule } from '../material.module';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [QuestionDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MomentModule
  ],
  exports: [QuestionDetailComponent]
})
export class QuestionsModule { }
