import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  products  = [
    {name: "Phone XL", description : "A large phone with one of the best screens", price:799},
    {name: "Phone Mini", description: "A great phone with one of the best cameras", price:699},
    {name: "Phone Standard", price:299},
    ];
    share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/