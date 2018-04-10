/**
 * Created by Ronney on 4/1/2018.
 */
export class RomanModel {


  // This function returns value of a Roman symbol
  value(r: any): number {
    if (r === 'I') {
      return 1;
    }

    if (r === 'V') {
      return 5;
    }

    if (r === 'X') {
      return 10;
    }

    if (r === 'L') {
      return 50;
    }

    if (r === 'C') {
      return 100;
    }
    if (r === 'D') {
      return 500;
    }
    if (r === 'M') {
      return 1000;
    }
    return -1;
  }


  // Finds decimal value of a given romal numeral
  romanToDecimal(str: any): any {
    // Initialize result
    let res = 0;

    for (let i = 0; i < str.length; i++) {
      // Getting value of symbol s[i]
      let s1 = this.value(str.charAt(i));

      // Getting value of symbol s[i+1]
      if (i + 1 < str.length) {
        let s2 = this.value(str.charAt(i + 1));

        // Comparing both values
        if (s1 >= s2) {
          // Value of current symbol is greater
          // or equalto the next symbol
          res = res + s1;
        }
        else {
          res = res + s2 - s1;
          i++; // Value of current symbol is
          // less than the next symbol
        }
      }
      else {
        res = res + s1;
        i++;
      }
    }

    console.log('Integer', res);
    return res;


  }
}
