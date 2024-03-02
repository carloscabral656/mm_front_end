import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login-user-data',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatGridList, MatIcon, MatIconModule, MatButtonModule],
  templateUrl: './login-user-data.component.html',
  styleUrl: './login-user-data.component.scss',
})
export class LoginUserDataComponent {
  public hide = true;
}
