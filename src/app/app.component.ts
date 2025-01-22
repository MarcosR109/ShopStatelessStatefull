import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatefulComponent } from "./stateful/stateful.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StatefulComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyshopEjercicio';
}
