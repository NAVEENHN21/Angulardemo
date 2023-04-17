import { Component } from '@angular/core';

@Component({
  selector: 'success-alert',
  template:
    '<p>This is a Success  <br/><br/><button class="btn btn-success">Completed</button></p>',
  styles: [
    `
      p {
        padding: 10px;
        background-color: orangered;
        border: 2px solid red;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
