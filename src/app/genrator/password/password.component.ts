import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password =''
  length:number=0;

  letterIncludes=false;
  symbolIncludes=false;;
  NumberIncludes=false;

  inputValueChange(event: Event) {

    const inputElement = event.target as HTMLInputElement | null;
    
    if (inputElement && inputElement.value !== null) {
      const parsedValue = parseInt(inputElement.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      // Handle the case when parsing fails (NaN)
      this.length = 0; // For example, set it to a default value
    }
  }}
  

  generator(){
    const mynumnber='123456789';
    const myletter='abcdefghijklmnopqrstuvxyz';
    const mysybole='!@$%&*<>?#';
   let mypssowrd='';
   if(this.NumberIncludes){
    mypssowrd +=mynumnber
  }
    if(this.letterIncludes){
      mypssowrd +=myletter
    }
  
    if(this.symbolIncludes){
      mypssowrd +=mysybole;

    }

    let generatorPassword='';
    for(let i=0; i<this.length;i++){
      let index=Math.floor(Math.random()*mypssowrd.length);

      generatorPassword +=mypssowrd[index];

    }
    console.log(generatorPassword)

    // this.password="hel019"
    this.password=generatorPassword;

  }
  onchangeLetter(){
    this.letterIncludes=!this.letterIncludes;
    
  }
  onchangesymbole(){
    this.symbolIncludes=!this.symbolIncludes;

  }
  onchangeNumbers(){
    this.NumberIncludes=!this.NumberIncludes;

  }

}
