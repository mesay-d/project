import { Component } from '@angular/core';

@Component({
  selector: 'app-typegame',
  templateUrl: './typegame.component.html',
  styleUrls: ['./typegame.component.css']
})
export class TypegameComponent {
   ob:Object={
    name:"ayela",
    love:"honey",
    father:"daniel",
    mysweet:"lemlem desalgn"

  }
  enteredValue:string=''
obkey=Object.keys(this.ob)

num:number=Math.floor(Math.random()*4)
constructor(){
  console.log(this.num)

}
randoms: string = `I am always ${this.ob[this.obkey[this.num] as keyof typeof this.ob]}`;

// random:string=`I am always ${this.ob[this.obkey[this.num]]}`

onInput(event:Event){

  let values=event.target as HTMLInputElement|null;
  if(values){
    this.enteredValue=values?.value
    console.log(this.enteredValue)
  }
 

}
compare(leter:string, inputText:string){
  if(!inputText){
    return "pedding"
  }
  return leter==inputText? "correct":"Incorrect"
}

}
