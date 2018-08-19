import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trustee } from '../models/trustee';


@Injectable({
  providedIn: 'root'
})
export class TrusteeApiService {
  apiUrl: string;
  constructor(private http: HttpClient) {
  	this.apiUrl = "  http://localhost:3000/trustees"; 
  }

  getTrusteeList() {
  	return this.http.get(this.apiUrl);
  }

  getTrustee(id:string) {
  	return this.http.get(this.apiUrl+"/"+id);
  }

  saveTrustee(trustee: Trustee) {
  	return this.http.post(this.apiUrl,trustee);
  }

  editTrustee(trustee: Trustee) {
  	return this.http.put(this.apiUrl+"/"+trustee.id,trustee);
  }

  deleteTrustee(id:string) {
  	return this.http.delete(this.apiUrl+"/"+id);
  }

}
