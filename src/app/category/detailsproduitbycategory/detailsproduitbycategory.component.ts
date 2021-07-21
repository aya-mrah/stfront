import { Component, OnInit } from '@angular/core';
import {ServicecategoryService} from "../../services/servicecategory.service";
import {ServiceproductService} from "../../services/serviceproduct.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
@Component({
  selector: 'app-detailsproduitbycategory',
  templateUrl: './detailsproduitbycategory.component.html',
  styleUrls: ['./detailsproduitbycategory.component.css']
})
export class DetailsproduitbycategoryComponent implements OnInit {
  private sub: any;
  categories:any;
 id: any;
    constructor(private service:ServicecategoryService,public s:ServiceproductService,private route: ActivatedRoute, private http: HttpClient,  private  router:Router) { }

    ngOnInit(): void {
       this.sub = this.route.params.subscribe(params => {
               this.id = +params['id'];

               this.service.afficherlesProduit(this.id).subscribe( data => {
                 this.categories = data;
                 console.log(data);
               });
             });
           }

  }
