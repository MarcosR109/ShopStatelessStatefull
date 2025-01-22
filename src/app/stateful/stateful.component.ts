import { Component } from '@angular/core';
import { ShopModel } from '../models/shop.model';
import { Product } from '../interface/product';
import { CommonModule } from '@angular/common';
import { StatelessComponent } from '../stateless/stateless.component';
@Component({
  selector: 'app-stateful',
  imports: [CommonModule, StatelessComponent],
  template: `
  

  <div class="container d-flex justify-content-center p-3">
    <div class="d-flex">
      <div class="d-flex flex-wrap">
        <div *ngFor="let product of shopModel.items" class="card m-1" style="width: 18rem;">
        <app-stateless [product] = "product"></app-stateless>

        </div>
      </div>
      <div *ngIf="boughtItems.length > 0" class="container d-flex justify-content-center p-3">
        <ul class="list-group">
          <li class="list-item" *ngFor="let product of boughtItems">{{product.nombre}}</li>
        </ul>
      </div>
    </div>
  </div>
  `,
  styles: ``
})

export class StatefulComponent {
  shopModel = new ShopModel();
  boughtItems: Array<Product> = [];
  constructor() {
  }

  comprar(product: Product) {
    this.boughtItems.push(product);
  }
}
