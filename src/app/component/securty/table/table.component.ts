import { Component, OnInit } from '@angular/core';
import { TablesService } from '../tables.service';

export interface mydata{
  name:string,
  age:number,
  address:string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent  {
  datas:mydata[]=[]
constructor(private tableVA:TablesService){


 }
// ngOnInit(){
//   this.tableVA.getdata().subscribe((re)=>{
//     console.log("tatttt",re)
//     this.datas=re
//   })

// }
}
