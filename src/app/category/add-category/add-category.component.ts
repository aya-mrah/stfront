import { Component, OnInit } from '@angular/core';
import {ServicecategoryService} from "../../services/servicecategory.service";
import { Category } from 'src/app/model/category';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
 categorie: Category = new Category();
 /*categorie = {
  //  id:'',
    nom: '',
    qt:'',
    date_creation: '',
    date_mmodif: null
  };*/

  submitted = false;

  constructor(private categorieService: ServicecategoryService) { }

  ngOnInit(): void {
  }

  createCategorie(): void {
    const data = {
   //   id: this.categorie.id,
      nom: this.categorie.nom,
      qt: this.categorie.qt,
      date_creation: this.categorie.date_creation,
      date_mmodif: null

    };

    this.categorieService.createCategorie(this.categorie)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCategorie(): void {
    this.submitted = false;
    this.categorie = {
      id:1,
      nom: '',
      qt: '',
      date_creation:'',
      date_mmodif:null
    };
  }

}
