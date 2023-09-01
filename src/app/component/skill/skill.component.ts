import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  name="mesay lo"
baby!:string
  
  acceptfromexpriance(a:string){
    this.baby=a

  }

}
