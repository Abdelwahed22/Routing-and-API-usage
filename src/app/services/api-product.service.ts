import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { Icatogery } from '../models/icatogery';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
  private apiUrl = 'http://localhost:3000/Product'; // json-server endpoint
  private categoryUrl = 'http://localhost:3000/Category'; // json-server endpoint for categories

  constructor(private http: HttpClient) { }

  // Get all products from the API
  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.apiUrl);
  }

  // Get all categories from the API
  getAllCategories(): Observable<Icatogery[]> {
    return this.http.get<Icatogery[]>(this.categoryUrl);
  }

  // Get product by ID
  getProductById(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.apiUrl}/${id}`);
  }

  // Get products by category ID (using query parameter)
  getProductsByCategory(catId: number): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${this.apiUrl}?catId=${catId}`);
  }

  // Create a new product
  createProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(this.apiUrl, product);
  }

  // Update a product
  updateProduct(id: number, product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(`${this.apiUrl}/${id}`, product);
  }

  // Delete a product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
