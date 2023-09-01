import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expriance',
  templateUrl: './expriance.component.html',
  styleUrls: ['./expriance.component.css']
})
export class ExprianceComponent {
  @Input() unit!:string
  @Output() parent=new EventEmitter()

 sendata(){
  console.log(111111111111)
  this.parent.emit("hellow from expriance")
 }
}
