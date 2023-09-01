import { Injectable } from '@angular/core';
import { mydata } from './table/table.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {movies} from "./table/"

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private data="asset/data.json"

  

  constructor(private http:HttpClient) {

   }
   getdata():Observable<any[]>{
    console.log(this.data)
    return this.http.get<any[]>(this.data)

   }

}
