import { Component } from '@angular/core';
import { JSON_FORMATTER } from './json-formatter.config';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss'],
})
export class JsonFormatterComponent {
  jsonFormatterData = JSON_FORMATTER;
  formattedText: string = '';
  inputText: string = '';
  minifiedText: string = '';
  errorInJson: any;

  get rapidPageValue() {
    return JSON.stringify(this.inputText, null, 2);
  }
  set inputTextVal(val: any) {
    this.errorInJson = '';
    try {
      this.inputText = JSON.parse(val);
    } catch (error) {
      this.inputText = this.formattedText = '';
      if (val === '') {
        this.errorInJson = val;
      } else {
        this.errorInJson = error;
      }
    }
  }

  formatJson(): void {
    this.formattedText = JSON.stringify(this.inputText, null, 4);
  }

  minifyJson(): void {
    this.formattedText = JSON.stringify(this.inputText);
  }
}
