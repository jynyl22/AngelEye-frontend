import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {
  currentQuestionIndex = 0;
  selectedAnswer: string = '';
  submittedAnswer: boolean = false;
  next: boolean = false;
  complete: boolean = false;

  constructor(private router: Router){}

  quizImages = [
    'assets/quiz-images/one.png',
    'assets/quiz-images/two.png',
    'assets/quiz-images/three.png',
    'assets/quiz-images/four.jpg',
  ];
  quizQuestions = [
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Lung cancer', 'Emphysema'],
      correctAnswer: 'Pneumonia'
    },
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Lung cancer', 'Emphysema'],
      correctAnswer: 'Covid-19'
    },
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Lung cancer', 'Emphysema'],
      correctAnswer: 'Lung  cancer'
    },
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Lung cancer', 'Emphysema'],
      correctAnswer: 'Emphysema'
    }
  ];

  currentQuestion() {
    return this.quizQuestions[this.currentQuestionIndex];
  }

  currentImage() {
    return this.quizImages[this.currentQuestionIndex];
  }

  submitAnswer() {
    this.submittedAnswer = true;
    if(this.selectedAnswer == this.currentQuestion().correctAnswer){
      alert('Correct!');
    }
    else{
      alert('Incorrect.');
    }
  }

  nextQuestion() {
    if(this.currentQuestionIndex < this.quizQuestions.length - 1){
      this.currentQuestionIndex++;
      this.selectedAnswer = '';
    }
    else{
      alert('Quiz complete!')
      this.complete=true;
    }
    this.submittedAnswer = false;
  }

  goBack(){
    this.router.navigate(['']);
  }
}
