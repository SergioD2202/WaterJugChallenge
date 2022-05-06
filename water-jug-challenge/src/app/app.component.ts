import { Component } from '@angular/core';
import { WaterjugsolutionService } from './services/waterjugsolution.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'water-jug-challenge';
  bucket_x:string = "";
  bucket_y:string = "";
  measure_z:string = "";
  stepsOrder: any[] = [];
  displayedMessage: string = ""

  constructor(private waterJugSolutionService: WaterjugsolutionService) {}

  //remove the notations of decimals and negative
  avoidDecimals(event:any, option:number) {

    if(event.key==='.' || event.key === '-')
    {
      event.preventDefault();
    }

    switch(option) {
      case 1:
        if(!this.bucket_x && event.key === '0') {
          event.preventDefault();
        }
        break;

      case 2:
        if(!this.bucket_y && event.key === '0') {
          event.preventDefault();
        }
        break;

      case 3:
        if(!this.measure_z && event.key === '0') {
          event.preventDefault();
        }
        break;
    }
  }

  //check if the fields are filled
  checkFields(){
    return !this.bucket_x || !this.bucket_y || !this.measure_z;
  }

  //solve the problem
  solve() {
    let x = Number(this.bucket_x);
    let y = Number(this.bucket_y);
    let z = Number(this.measure_z);

    this.stepsOrder = this.waterJugSolutionService.solveWaterJug(x,y,z);

    if(this.stepsOrder.length > 0) {
      this.displayedMessage = "";
    }

    else {
      this.displayedMessage = "No Solution"
    }
  }
}
