import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  public question: Question = new Question(
    'Tengo una duda',
    'Estoy desarrollando una API y no me puedo autenticar',
    new Date,
    'devicon-android-plain'
  );
  
  constructor() { }

  ngOnInit(): void {
  }

}
