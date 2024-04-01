import { Component } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HeaderMenuComponent } from '../../presentation/header-menu/header-menu.component';
import { SidebarMenuComponent } from '../../presentation/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-home-interface',
  standalone: true,
  imports: [
    RouterModule,
    HeaderMenuComponent,
    SidebarMenuComponent,
    MatSidenavModule,
  ],
  templateUrl: './main-interface.component.html',
  styleUrl: './main-interface.component.scss',
})
export class MainInterfaceComponent {
  public drawer!: MatDrawer;

  public handleDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }
}
