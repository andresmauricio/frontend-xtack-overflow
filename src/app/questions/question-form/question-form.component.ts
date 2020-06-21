import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  public onSumbmit(form: NgForm): void {
    const { title, description } = form.value;
    const q = new Question(title, description);
    console.log(q);
  }

}
