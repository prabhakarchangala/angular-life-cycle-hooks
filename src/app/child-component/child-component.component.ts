import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnChanges {

  @Input() data: string | undefined;
  lifecyclehook: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Chile Component onChange");
    this.lifecyclehook++;
  }

}
