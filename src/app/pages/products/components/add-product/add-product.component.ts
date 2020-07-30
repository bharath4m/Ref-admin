import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(form: NgForm) {
  }

  upload(event: any) {
    // this.selectedImage = event.target.files[0];
    // console.log(this.selectedImage);
    // var filePath = 'products/' + this.product + '/' ;
    // const storageRef = firebase.storage().ref(filePath);
    //     storageRef.put(this.selectedImage)
    //       .then(function (fileSnapshot) {
    //         return fileSnapshot.ref.getDownloadURL()
    //           .then((url) => {
    //             console.log(fileSnapshot);
    //            return this.db.database.ref('products').child(this.product).update({
    //               imageUrl: url
    //             });
    //           });
    //       });
    }
}
