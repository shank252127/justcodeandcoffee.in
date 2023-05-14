import { Component, ViewChild } from '@angular/core';
import { JSON_FORMATTER } from '../config/json-formatter.config';
import { MatAccordion } from '@angular/material/expansion';
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
  errorInJson = '';
  accordianOpen = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;
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

  openAccordian(): void {
    this.accordianOpen = !this.accordianOpen;
  }
}
