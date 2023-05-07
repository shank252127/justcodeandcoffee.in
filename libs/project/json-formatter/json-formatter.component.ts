import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss'],
})
export class JsonFormatterComponent implements OnInit {
  formattedText: any = '';
  inputText: any = '';
  minifiedText: string = '';
  errorInJson: any;
  constructor() {}
  ngOnInit(): void {}

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
  minifyJson(): void {}
}
