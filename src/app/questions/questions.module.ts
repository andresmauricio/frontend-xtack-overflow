import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { MaterialModule } from '../material.module';
import { MomentModule } from 'angular2-moment';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { FormsModule } from '@angular/forms';
import { QuestionListComponent } from './question-list/question-list.component';

@NgModule({
  declarations: [QuestionDetailComponent, AnswerFormComponent, QuestionListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MomentModule
  ],
  exports: [QuestionDetailComponent, QuestionListComponent]
})
export class QuestionsModule { }
