import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ServicecategoryService {

 public baseUrl:string= 'http://localhost:8080/Category';
  constructor(private http: HttpClient) { }


      getCategoriesList(): Observable<any> {
       return this.http.get(`${this.baseUrl}/get`);
      }

      afficherlesProduit(id: number): Observable<Product>{
        return this.http.get<Product>(`${this.baseUrl}/produit/${id}`);
      }


      getCategorieById(id: number): Observable<Category>{
                return this.http.get<Category>(`${this.baseUrl}/categorie/${id}`);
       }

       createCategorie(category:Category): Observable<Object> {
        return this.http.post(`${this.baseUrl}/categorieadd`,category);
       }
       delete(id: number): Observable<any> {
         return this.http.delete(`${this.baseUrl}/deletecategorie/${id}`, { responseType: 'text' });
         }
       updatedCategorie(id: number,category:Category): Observable<Object> {
              return this.http.put(`${this.baseUrl}/categorieupdate/${id}`, category);
        }

}
