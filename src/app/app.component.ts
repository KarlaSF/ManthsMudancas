import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent,  } from './componente/login/login.component';
import { PprincipalComponent } from "./paginas/pprincipal/pprincipal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LoginComponent, PprincipalComponent]
})
export class AppComponent {
  title = 'Manthano';
}
