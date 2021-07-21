import {ServiceproductService} from "../../services/serviceproduct.service";
import {ServicecategoryService} from "../../services/servicecategory.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';
import * as XLSX from 'xlsx';
import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
 import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
fileName= 'product.xlsx';
produits:any;
categories:any;
nom = '';
  constructor(private service:ServiceproductService,private service1:ServicecategoryService,  private  router:Router) { }
 @ViewChild('htmlData',{static:false}) htmlData!:ElementRef;
  ngOnInit(): void {
      this.produits =this.service.getAllProduts();

      let resp=this.service.getAllProduts();
      resp.subscribe ((data)=>this.produits=data);

      this.categories =this.service1.getCategoriesList();

            let resp1=this.service1.getCategoriesList();
            resp1.subscribe ((data)=>this.categories=data);
  }

  searchByName(): void {
    this.service.searchByName(this.nom)
      .subscribe(
        produits => {
          this.produits = produits;
          console.log(produits);

        },
        error => {
          console.log(error);
        });
  }
  getProduitById(id: number){
        this.router.navigate(['product', id]);
      }

    updatedCategorie(id: number){
          this.router.navigate(['productupdate',id]);
        }
reloadData() {
       this.produits =this.service.getAllProduts();
    let resp=this.service.getAllProduts();
    resp.subscribe ((data)=>{this.produits=data

    });;
  }

      deleteProduit(id: number) {
          this.service.deleteProduit(id)
            .subscribe(
              data => {
                console.log(data);
          this.reloadData();


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
