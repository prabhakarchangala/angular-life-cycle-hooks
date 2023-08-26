import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {
  arbitraryData:string = 'Initial';

  constructor(){
    console.log("Parent Componet");
    setTimeout(() => {
      this.arbitraryData = 'Final', 500 
    });
    console.log("Parent Component timeout");
  }

  sendTheNewValue(event:any){
    this.arbitraryData = event.target.value;
    }

    DoCheckClick(){
      console.log("Button Clicked...");
    }
}

