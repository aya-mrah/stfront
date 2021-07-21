import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import {ServiceproductService} from "../../services/serviceproduct.service";
import {ServicecategoryService} from "../../services/servicecategory.service";
import {ActivatedRoute} from "@angular/router";
//import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

   id:any;
   produit: Product =new Product();
   submitted = false;
   categories:any;
  constructor(private service:ServiceproductService,private service1:ServicecategoryService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  this.service1.getCategoriesList().subscribe(data => {
    this.categories = data;
    console.log(data);
    });


      }

onSubmit(){
    this.service.createProduit( this.produit).subscribe( data =>{
       this.submitted = true;
        this.getProduitsList();

      }
      , error => console.log(error));
  }
 getProduitsList(){
    this.router.navigate(['/products']);
  }
}
