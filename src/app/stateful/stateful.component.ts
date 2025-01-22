import { Component } from '@angular/core';
import { ShopModel } from '../models/shop.model';
import { Product } from '../interface/product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stateful',
  imports: [CommonModule],
  template: `
  <div class="container d-flex justify-content-center p-3">
    <div class="d-flex">
      <div class="d-flex flex-wrap">
        <div *ngFor="let product of shopModel.items" class="card m-1" style="width: 18rem;">
          <img src="{{product.imagen}}" class="card-img-top" alt="{{product.alt}}">
          <div class="card-body">
            <h5 class="card-title">{{product.nombre}}</h5>
            <p class="card-text">{{product.descripcion}}</p>
            <a href="#" (click)="comprar(product)" class="btn btn-primary">Comprar!</a>
          </div>
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
