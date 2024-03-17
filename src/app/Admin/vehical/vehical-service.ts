import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehical } from './vehical_model';

@Injectable({
  providedIn: 'root'
})
export class VehicalService {

  private url = "http://localhost:8080/api/v1"

  constructor(private httpClient : HttpClient) { }

getVehicals():Observable < Vehical[]>{
  return this.httpClient.get <Vehical[]>(`${this.url+"/getvehical"}`)
}





}
