import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginUserDataComponent } from '../../presentation/login-user-data/login-user-data.component';
import { LoginMessageComponent } from '../../presentation/login-message/login-message.component';

@Component({
  selector: 'app-login-interface',
  standalone: true,
  imports: [MatGridListModule, LoginUserDataComponent, LoginMessageComponent],
  templateUrl: './login-interface.component.html',
  styleUrl: './login-interface.component.scss'
})
export class LoginInterfaceComponent {

}
