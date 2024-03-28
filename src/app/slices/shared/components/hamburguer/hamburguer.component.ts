import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-hamburguer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './hamburguer.component.html',
  styleUrl: './hamburguer.component.scss'
})
export class HamburguerComponent {

  @Input()
  public drawerComponent!: MatDrawer;

  public isClosed: boolean;

  constructor() {
    this.isClosed = false;
  }

  public toogleHamburguer() {
    this.isClosed = !this.isClosed;
    this.drawerComponent.toggle();
  }
}
