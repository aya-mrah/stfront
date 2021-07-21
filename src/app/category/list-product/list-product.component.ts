import { Component, OnInit } from '@angular/core';
import {ServiceproductService} from "../../services/serviceproduct.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

produits:any;

  constructor(private service:ServiceproductService, private http: HttpClient,  private  router:Router) { }

  ngOnInit(): void {
      this.produits =this.service.getAllProduts();

      let resp=this.service.getAllProduts();
      resp.subscribe ((data)=>this.produits=data);
  }

}
