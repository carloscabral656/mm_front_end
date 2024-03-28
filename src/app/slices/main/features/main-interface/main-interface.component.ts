import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HeaderMenuComponent } from '../../presentation/header-menu/header-menu.component';

@Component({
  selector: 'app-home-interface',
  standalone: true,
  imports: [MatSidenavModule, RouterModule, HeaderMenuComponent,],
  templateUrl: './main-interface.component.html',
  styleUrl: './main-interface.component.scss',
})
export class MainInterfaceComponent {
  public showFiller = false;
}
