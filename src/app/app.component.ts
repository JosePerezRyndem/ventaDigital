import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogosService } from './catalogos.service';
import { HttpClientModule } from '@angular/common/http';
import { SistemaService } from './sistema.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ventaDigital';

  constructor(private catalogosService: CatalogosService, private authService: AuthService, private sistemaService: SistemaService) {
  }

  catalogos() {
    this.catalogosService.productCategoryResponse().subscribe((response) => {
      console.log('productCategoryResponse->', response);
    });
  }

  connectToken() {
    this.authService.connectToken({
      username: 'alejandro.cervantes@ryndem.mx',
      password: 'Abc.1234'
    }).subscribe((response) => {
      console.log('connectToken->', response);
      // this.sistemaService.HomeWhoAmI(response.access_token).subscribe((response) => {
      //   console.log('HomeWhoAmI->', response);
      // });
    });
  }


}
