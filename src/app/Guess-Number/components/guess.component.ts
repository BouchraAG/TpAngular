import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  randNumber!: number
  guess!: number
  noOfTries!: number

  guessed = false
  answer = ""
  constructor() {
  }

  ngOnInit(): void {
    this.randNumber=Math.floor(Math.random() * 1000) + 1
    this.guess = 0
    this.noOfTries = 0
  }

  public newRand() {
    this.randNumber = Math.floor(Math.random() * 1000) + 1
    this.noOfTries = 0
    this.guess = 0
  }
  public startTest() {
     this.noOfTries++
    if (this.guess == this.randNumber) {
      this.guessed = true
      this.answer = "your guess is Correct !"
    } else {
      if (this.guess > this.randNumber)
        this.answer = "the number you guess is higher"
      else
        this.answer = "the number you guess is lower"
      this.guessed = false
    }
  }
}
