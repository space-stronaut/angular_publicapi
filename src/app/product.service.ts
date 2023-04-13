import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products'; // Ganti URL API sesuai dengan API DummyJSON

  constructor(private http: HttpClient) { }

  // Fungsi untuk mengambil daftar produk
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Fungsi untuk mengambil detail produk berdasarkan ID
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Fungsi untuk menambahkan produk baru
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/add", product);
  }

  // Fungsi untuk mengupdate produk
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }

  // Fungsi untuk menghapus produk berdasarkan ID
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  searchProducts(query: string): Observable<any> {
    const url = `https://dummyjson.com/products/search?q=${query}`;
    return this.http.get(url);
  }
}
