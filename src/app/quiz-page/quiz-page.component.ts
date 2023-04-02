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
    'assets/quiz1.png',
    'assets/quiz2.png',
    'assets/quiz3.png',
    'assets/quiz4.jpeg',
  ];
  heatImages = [
    'assets/heat1.jpg',
    'assets/heat2.jpg',
    'assets/heat3.jpg',
    'assets/heat4.jpg',
  ]
  quizQuestions = [
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Normal'],
      correctAnswer: 'Covid-19'
    },
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Normal'],
      correctAnswer: 'Covid-19'
    },
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Normal'],
      correctAnswer: 'Normal'
    },
    {
      question: 'What disease does this detect?',
      answers: ['Covid-19', 'Pneumonia', 'Normal'],
      correctAnswer: 'Pneumonia'
    }
  ];

  currentQuestion() {
    return this.quizQuestions[this.currentQuestionIndex];
  }

  currentImage() {
    return this.quizImages[this.currentQuestionIndex];
  }
  currentHeatMap() {
    return this.heatImages[this.currentQuestionIndex];
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

