import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ServiceproductService} from "../../services/serviceproduct.service";
import {HttpEventType, HttpResponse} from 'node_modules/@angular/common/http';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  sub: any;
  roles:any;
  id:any;
  event:any;
  currentproduct:any;
  selectedFiles:any;
  progress: any;
  currentFileUpload: any;
  private currentTime: any;
  editPhoto: boolean=false;
  mode: number=0;

  constructor(public produitService: ServiceproductService,private route: ActivatedRoute, private router: Router) { }

 ngOnInit(): void {

          this.sub = this.route.params.subscribe(params => {
          this.id = +params['id'];
          this.produitService.getProduitById(this.id).subscribe( data => {
                   this.currentproduct = data;
                   console.log(data);
                 });
               });
               }



      onEditPhoto(p:any) {
         this.currentproduct=p;
         this.editPhoto=true;
       }

       onSelectedFile(event:any) {
         this.selectedFiles=event.target.files;
       }

       uploadPhoto() {
         this.progress = 0;
         this.currentFileUpload = this.selectedFiles.item(0)
         this.produitService.uploadPhotoProduct(this.currentFileUpload, this.currentproduct.id).subscribe(event => {
           if (event.type === HttpEventType.UploadProgress) {
             this.progress = Math.round(100 * event.loaded );
           } else if (event instanceof HttpResponse) {
             this.currentTime=Date.now();
             this.editPhoto=false;

           }
         },err=>{
           alert("Problème de chargement");
         })



         this.selectedFiles = undefined
       }













               }

