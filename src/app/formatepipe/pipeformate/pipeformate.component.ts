import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeformate',
  templateUrl: './pipeformate.component.html',
  styleUrls: ['./pipeformate.component.css']
})
export class PipeformateComponent {
  inputvalue=''
  InDate:any=''

  onchangeName(event:Event){
    let inputdata=event.target as HTMLInputElement |null
   // as HTMLInputElement | null;
    if(inputdata && inputdata.value!==null){
     this.inputvalue=inputdata.value

    }

  }

  dateChange(e:Event){
    let inputeValue=e.target as HTMLInputElement
  if(inputeValue){
     this.InDate=inputeValue.value
  }
  }

}
