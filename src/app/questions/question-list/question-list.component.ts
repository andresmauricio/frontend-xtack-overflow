import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

const p = new Question(
  'Esta es una pregunta',
  'Tengo muchas dudas ...',
  new Date(),
  'devicon-android-plain'
);

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
 public questions: Question[] = new Array(10).fill(p);
  constructor() { }

  ngOnInit(): void {
  }

}
