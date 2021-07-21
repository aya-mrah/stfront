import { Component, OnInit } from '@angular/core';
import {ServiceproductService} from "../../services/serviceproduct.service";
import {ServicecategoryService} from "../../services/servicecategory.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
   id:any;
   produit: any;
   submitted = false;
   categories:any;
  constructor(private service:ServiceproductService,private service1:ServicecategoryService,private route: ActivatedRoute, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  this.service1.getCategoriesList().subscribe(data => {
    this.categories = data;
    console.log(data);
    });
        this.id = this.route.snapshot.params['id'];

        this.service.getProduitById(this.id).subscribe(data => {
          this.produit = data;

          console.log(data);
        }, error => console.log(error));



      }

onSubmit(){
    this.service.updatedProduit(this.id, this.produit).subscribe( data =>{
       this.submitted = true;
        this.getProduitsList();

      }
      , error => console.log(error));
  }
 getProduitsList(){
    this.router.navigate(['/products']);
  }
}
