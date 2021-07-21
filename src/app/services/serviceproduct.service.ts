import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceproductService {
 public baseUrl :string= 'http://localhost:8080/produit';
  constructor(private http: HttpClient) { }

      getAllProduts(): Observable<any> {
       return this.http.get(`${this.baseUrl}/get`);
      }

     searchByName(nom:any): Observable<any> {
     return this.http.get(`${this.baseUrl}/get?nom=${nom}`);
     }

     createProduit(produit:Product): Observable<Object> {
             return this.http.post(`${this.baseUrl}/addproduit`,produit);
     }
     getProduitById(id: number): Observable<Category>{
           return this.http.get<Category>(`${this.baseUrl}/produit/${id}`);
     }

     deleteProduit(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/produitdelete/${id}`, { responseType: 'text' });
       }
      updatedProduit(id: number,product:Product): Observable<Object> {
         return this.http.put(`${this.baseUrl}/produitupdate/${id}`, product);
       }


      uploadPhotoProduct(file: File, idProduct:number): Observable<HttpEvent<{}>> {
      let formdata: FormData = new FormData();
      formdata.append('file', file);
      const req = new HttpRequest('POST', this.baseUrl+'/uploadPhoto/'+idProduct, formdata, {
       reportProgress: true,
       responseType: 'text'
    });
    return this.http.request(req);
    }
}
