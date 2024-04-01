import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { HamburguerComponent } from '../../../shared/components/hamburguer/hamburguer.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [MatDrawer,HamburguerComponent, MatIcon],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent implements AfterViewInit {
  @Output()
  public drawerEmmiter = new EventEmitter<MatDrawer>();

  @ViewChild('drawer')
  public drawerViewChild!: MatDrawer;

  ngAfterViewInit(): void {
    this.drawerEmmiter.emit(this.drawerViewChild);
  }
}
