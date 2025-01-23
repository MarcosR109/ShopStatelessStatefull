import { Component, viewChild } from '@angular/core';
import { ShopModel } from '../models/shop.model';
import { Product } from '../interface/product';
import { CommonModule } from '@angular/common';
import { StatelessComponent } from '../stateless/stateless.component';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-stateful',
  imports: [CommonModule, StatelessComponent, ConfirmComponent],
  template: `
    <div class="container d-flex justify-content-center p-3">
      <div class="d-flex">
        <div class="d-flex flex-wrap">
          <div
            *ngFor="let product of shopModel.items"
            class="card m-1"
            style="width: 18rem;"
          >
            <app-stateless
              [product]="product"
              (camisetaCompradaEvent)="camisetaComprada($event)"
            ></app-stateless>
          </div>
        </div>
        <div
          *ngIf="boughtItems.length > 0"
          class="container d-flex justify-content-center p-3"
        >
          <ul class="list-group">
            <li class="list-item" *ngFor="let product of boughtItems">
              {{ product.nombre + ' ' + product.precio }}
            </li>
          </ul>
        </div>
        <div
          *ngIf="boughtItems.length > 0"
          class="container d-flex justify-content-center p-3"
        >
          <p class="text">Total: {{ this.total }}€</p>
          <app-confirm></app-confirm>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatefulComponent {
  @ViewChild(ConfirmComponent) confirmComponent!: ConfirmComponent;
  shopModel = new ShopModel();
  boughtItems: Array<Product> = [];
  total: number = 0;

  ngAfterViewInit() {
    // Ahora confirmComponent está correctamente inicializado
    console.log(this.confirmComponent);
  }
  constructor() {}

  comprar(_product: Product) {
    console.log(_product);
    if (_product.precio) {
      this.boughtItems.push(_product);
      this.total += _product.precio;
    }
  }

  camisetaComprada(_event: Product) {
    console.log(_event);
    this.comprar(_event);
    this.confirmComponent.isDisabled = false;
    console.log(this.confirmComponent);
  }
}
