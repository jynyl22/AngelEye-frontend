import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {
  currentQuestionIndex = 0;
  selectedAnswer: string = '';
  quizQuestions = [
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Lung cancer', 'Emphysema'],
      correctAnswer: 'Pneumonia'
    },
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Lung cancer', 'Emphysema'],
      correctAnswer: 'Pneumonia'
    }
  ];
  get currentQuestion(){
    return this.quizQuestions[this.currentQuestionIndex];
  }

  submitAnswer() {
    if(this.selectedAnswer == this.currentQuestion.correctAnswer){
      alert('Correct!');
    }
    else{
      alert('Incorrect.');
    }

    if(this.currentQuestionIndex < this.quizQuestions.length - 1){
      this.currentQuestionIndex++;
      this.selectedAnswer = '';
    }
    else{
      alert('Quiz complete!')
    }

  }
}
