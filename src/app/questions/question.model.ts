import { Answer } from './answer-form/answer.model';

export class Question {
    public title: string;
    public description: string;
    public createdAt?: Date | string;
    public icon?: string;
    public answers: Answer[];

    constructor(title: string, description: string, createdAt?: Date | string, icon?: string) {
        this.title = title;
        this.description= description;
        this.createdAt = createdAt;
        this.icon = icon;
        this.answers = []
    }
}