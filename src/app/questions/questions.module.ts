import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { MaterialModule } from '../material.module';
import { MomentModule } from 'angular2-moment';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { FormsModule } from '@angular/forms';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionRoutingModule } from './questions-routing.module';

@NgModule({
  declarations: [
    QuestionDetailComponent,
    AnswerFormComponent,
    QuestionListComponent,
    QuestionFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MomentModule,
    QuestionRoutingModule,
  ],
  exports: [
    QuestionDetailComponent,
    QuestionListComponent,
    QuestionFormComponent,
  ],
})
export class QuestionsModule {}
