import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../question.model';
import { icons } from '../icons';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  public icons = icons;

  constructor() { }

  ngOnInit(): void { }

  getVerifyIcon(icon: any) {
    let version;
    if (icon.versions.font) {
      if (icon.versions.font.includes('plain-wordmark')) {
        version = 'plain-wordmark';
      } else version = icon.versions.font[0];
    } else version = ''
    return version;
  }

  public onSumbmit(form: NgForm): void {
    const { title, description, iconName } = form.value;
    const q = new Question(title, description, new Date(), iconName);
    console.log(q);
  }

}
