import {ServicecategoryService} from "../../services/servicecategory.service";
//import { ServiceproductService } from './serviceproduct.service';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import * as XLSX from 'xlsx';
import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
 import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
fileName= 'categories.xlsx';
categories:any;
produits:any;

  constructor(private service:ServicecategoryService, private http: HttpClient,  private  router:Router) { }
  @ViewChild('htmlData',{static:false}) htmlData!:ElementRef;
  ngOnInit(): void {
      this.categories =this.service.getCategoriesList();
      let resp=this.service.getCategoriesList();
      resp.subscribe ((data)=>this.categories=data);
  }
   getCategorieById(id: number){
      this.router.navigate(['categorie', id]);
    }
      updatedCategorie(id: number){
        this.router.navigate(['categorieupdate',id]);
      }


      delete(id: number) {
          this.service.delete(id).subscribe(
               data => {
                console.log(data);
                this.produits =this.service.afficherlesProduit(id);

                 let resp=this.service.afficherlesProduit(id);
                 resp.subscribe ((data)=>this.produits=data);

              },
              error => console.log(error));
        }



          exportexcel(): void
          {

            let element = document.getElementById('excel-table');
            const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);


            const wb: XLSX.WorkBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');


            XLSX.writeFile(wb, this.fileName);

          }

           public downloadPDF():void {
               let data = this.htmlData.nativeElement;
               let options : any = {
                 orientation: 'p',
                 unit: 'px',
                 format: 'a3',
                 };
               let doc = new jsPDF(options);
                doc.html(data.innerHTML, {
                 callback: function (doc) {
                       doc.save("angular-demo.pdf");
                     },
                 margin:10,
                 x: 10,
                 y: 10
               });

          }
}
