import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  //add functions here like this: getUsers() {
  // return this._http.get('/users/')
  // }
  getPets() {
    return this._http.get('/animals/')
  }
  addPet(thePet) {
    return this._http.post('/animals/', thePet)
  }
  showPet(id) {
    console.log(id);
    return this._http.get(`/animals/${id}`)
  }
  delete(id) {
    return this._http.delete(`/animals/${id}`)
  }
  updatePet(id, thePet) {
    return this._http.put(`/animals/${id}`, thePet)
  }
  voteUp(id, thePet) {
    console.log(id)
    console.log(thePet)
    return this._http.put(`/animals/vote/${id}`, thePet)
  }


}

