import { Component, OnInit } from '@angular/core';
import {ServicecategoryService} from "../../services/servicecategory.service";
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../../model/category';
@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {

  currentcategorie = null;

   sub: any;
  roles:any;
  id:any;
currentproduct:any;
  constructor( private service: ServicecategoryService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {


      //  this.id = this.route.snapshot.params['id'];
         this.sub = this.route.params.subscribe(params => {
                this.id = +params['id'];

                this.service.getCategorieById(this.id).subscribe( data => {
                  this.currentproduct = data;
                  console.log(data);
                });


              });
              }}



