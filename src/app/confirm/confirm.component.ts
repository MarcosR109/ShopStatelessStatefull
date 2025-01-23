import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm',
  imports: [CommonModule],
  template: `
    <button
      *ngIf="!isDisabled"
      (click)="showModal = true"
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      datatarget="#exampleModal"
    >
      Confirmar compra
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      [ngClass]="{ show: showModal }"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Carrito :</h5>
            <button
              (click)="showModal = false"
              type="button"
              class="close"
              data-dismiss="modal"
              arialabel="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Confirmar compra?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              (click)="showModal = false"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              (click)="showModal = false"
            >
              Confirmar compra?
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
  .modal.show{display:block;}
  `,
})
export class ConfirmComponent {
  isDisabled: boolean = true;
  showModal: boolean = false;
}
