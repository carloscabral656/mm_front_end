import { Component, Input } from '@angular/core';
import { HamburguerComponent } from '../../../shared/components/hamburguer/hamburguer.component';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [HamburguerComponent],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  @Input()
  public drawerComponent!: MatDrawer;
}
