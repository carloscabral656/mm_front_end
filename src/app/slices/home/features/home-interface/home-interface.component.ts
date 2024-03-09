import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-home-interface',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './home-interface.component.html',
  styleUrl: './home-interface.component.scss'
})
export class HomeInterfaceComponent {
  public showFiller = false;
} 
