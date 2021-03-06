import { Component } from '@angular/core';
import { Problem } from './problem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unstoppable-text-future';

  problems: Problem[];
  message: string;

  constructor() {
    this.problems = [new Problem(),new Problem(),new Problem()];
    this.message = '';

  }

  send(){
    this.message="SENT TO " + this.problems[2].text;
    this.problems.forEach((p)=> p.text = '');
    
  }

  trackByFn(index: any, item: any) {
    return index;
 }

}
