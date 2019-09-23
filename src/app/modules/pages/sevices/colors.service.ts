import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  urlColors = 'https://reqres.in/api/colors';
  constructor(
    public http: HttpClient
  ) { }

  getColors(page:number){
    let params = new HttpParams().set('page',`${page}`)
    return this.http.get(this.urlColors,{params});
  }
}
