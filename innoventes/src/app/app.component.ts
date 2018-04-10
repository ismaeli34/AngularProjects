import {Component} from '@angular/core';
import {IntegerModel} from './model/IntegerModel';
import {RomanModel} from "./model/RomanModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color: string;
  romanArray: any = [];
  integerArray: any = [];
  result: number;
  step = 0;
  integer: IntegerModel = new IntegerModel();
  roman: RomanModel = new RomanModel();
  availableColors = [
    {name: 'none', color: ''},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];




  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  converRomanToInteger(): void {

    this.result = this.roman.romanToDecimal(this.integer.roman_number);
    console.log(this.integer.roman_number);

  }


  convertIntegerToRomanNumber(): void {

    this.printRoman(this.integer.input_number);
    console.log(this.integer.input_number);

  }

  printRoman(number: number): void {

    const c: number[] = [10001];
    let i = 0;
    if (number <= 0) {
      console.log('Invalid Number');
      return;
    }

    while (number !== 0) {
      if (number >= 1000) {
        i = this.digit('M', number / 1000, i, c);
        number = number % 1000;
      }
      else if (number >= 500) {
        if (number < 900) {
          i = this.digit('D', number / 500, i, c);
          number = number % 500;
        }


        else {
          i = this.subDigit('C', 'M', i, c);
          number = number % 100;
        }
      }

      else if (number >= 100) {
        if (number < 400) {
          i = this.digit('C', number / 100, i, c);
          number = number % 100;
        }

        else {
          i = this.subDigit('C', 'D', i, c);
          number = number % 100;
        }
      }

      else if (number >= 50) {
        if (number < 90) {
          i = this.digit('L', number / 50, i, c);
          number = number % 50;
        }


        else {
          i = this.subDigit('X', 'C', i, c);
          number = number % 10;
        }
      }
      else if (number >= 10) {
        // To add base symbol to the character array
        if (number < 40) {
          i = this.digit('X', number / 10, i, c);
          number = number % 10;
        }

        // To handle subtractive notation in case of
        // number having this.digit as 4 and adding
        // corresponding base symbol
        else {
          i = this.subDigit('X', 'L', i, c);
          number = number % 10;
        }
      }

      else if (number >= 5) {
        if (number < 9) {
          i = this.digit('V', number / 5, i, c);
          number = number % 5;
        }


        else {
          i = this.subDigit('I', 'X', i, c);
          number = 0;
        }
      }

      else if (number >= 1) {
        if (number < 4) {
          i = this.digit('I', number, i, c);
          number = 0;
        }

        else {
          i = this.subDigit('I', 'V', i, c);
          number = 0;
        }
      }
    }

// Printing equivalent Roman Numeral
    console.log('Roman numeral is:');
    for (let j = 0; j < i; j++) {
      console.log('roman number', c[j]);

      // this.romanArray.push(this.integer.roman_number);
      // console.log(this.romanArray);

    }
    console.log('ROMAN', c);
    this.romanArray = c.join('');


  }


  subDigit(num1: any, num2: any, i: any, c: any): any {

    c[i++] = num1;
    c[i++] = num2;
    return i;


  }

  digit(ch: any, n: any, i: any, c: any): any {

    for (let j = 0; j < n; j++) {

      c[i++] = ch;
      return i;

    }


  }


}
