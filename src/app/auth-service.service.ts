import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'https://dummyjson.com/auth/login'; // Ganti URL API sesuai dengan API DummyJSON

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // Mengirim permintaan HTTP POST ke endpoint login di backend
    // dengan data username dan password
    return this.http.post<any>(this.apiUrl, { username, password });
  }
}
