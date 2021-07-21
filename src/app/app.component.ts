
import { Component, OnInit } from '@angular/core';
import {ServicecategoryService} from "src/app/services/servicecategory.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   categories:any;
title='front';
   currentCategorie:any;

  constructor(public service:ServicecategoryService,
              private  router:Router,
              public authService:AuthenticationService){}

   ngOnInit(): void {
   this.authService.loadUser();
         if(this.authService.isAuthenticated())

         this.categories =this.service.getCategoriesList();

         let resp=this.service.getCategoriesList();
         resp.subscribe ((data)=>this.categories=data);

     }


   onLogout() {
      this.authService.logout();
      this.router.navigate(['/login']);
    }

       onLogin() {
           this.router.navigate(['/login']);
         }
        getProduitsList(){
           this.router.navigate(['/products']);
         }



    afficherlesProduit(id: number){
      this.router.navigate(['produit', id]);
    }


}
