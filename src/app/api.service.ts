import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs'
import { Plant } from './plant'


@Injectable({
  providedIn: "root"
})
export class ApiService {

  private plantUrl = ''

  constructor(private http: HttpClient) {}

  getPlants() {
    return this.http.get("http://localhost:3000/api/product/")
  }
}
