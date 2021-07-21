import { Component, OnInit } from '@angular/core';
import {ServicecategoryService} from "../../services/servicecategory.service";
import {ActivatedRoute,Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  id:any;
  categorie: any;
   submitted = false;
  constructor(private service:ServicecategoryService,private route: ActivatedRoute, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {

        this.id = this.route.snapshot.params['id'];

        this.service.getCategorieById(this.id).subscribe(data => {
          this.categorie = data;
          console.log(data);
        }, error => console.log(error));
      }

onSubmit(){
    this.service.updatedCategorie(this.id, this.categorie).subscribe( data =>{
       this.submitted = true;
        this.getCategoriesList();

      }
      , error => console.log(error));
  }
 getCategoriesList(){
    this.router.navigate(['/categories']);
  }

}
