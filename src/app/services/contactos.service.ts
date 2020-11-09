import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Contacto } from "../models/contacto";


@Injectable({
  providedIn: "root"
})
export class ContactosService {

  private resourceUrl ="https://demo3151356.mockable.io/clientes";
  constructor(private http: HttpClient) {}

  getContactos(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.resourceUrl);
  }

  get() {
    let params = new HttpParams();

    return this.http.get(this.resourceUrl, { params: params });
  }


  //getById(Id: number) {
  // return this.httpClient.get(this.resourceUrl + Id);
  //}

  post(obj: Contacto) {
    return this.http.post(this.resourceUrl, obj);
  }
}