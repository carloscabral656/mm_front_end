import { Component, Input } from '@angular/core';
import { HamburguerComponent } from '../../../shared/components/hamburguer/hamburguer.component';
import { MatDrawer } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [HamburguerComponent, MatIcon],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  @Input()
  public drawerComponent!: MatDrawer;
}
