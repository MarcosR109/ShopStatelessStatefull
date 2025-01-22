import { Component, Input } from '@angular/core';
import { StatefulComponent } from '../stateful/stateful.component';
import { Product } from '../interface/product';
@Component({
  selector: 'app-stateless',
  imports: [],
  template: `
          <img src="{{product.imagen}}" class="card-img-top" alt="{{product.alt}}">
          <div class="card-body">
            <h5 class="card-title">{{product.nombre}}</h5>
            <p class="card-text">{{product.descripcion}}</p>
            <button (click)="comprar()" [disabled]="comprado" class="btn btn-primary">{{texto}}</button>
          </div>
  `,
  styles: ``
})
export class StatelessComponent {
  @Input() product: Product;
  comprado: Boolean = false;
  texto = "Comprado";

  comprar() {
    this.comprado = true;
    this.texto = "Comprado!";
  }
  
  constructor() {
    this.product = {};
  }
}
