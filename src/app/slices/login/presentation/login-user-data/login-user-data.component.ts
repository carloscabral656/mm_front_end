import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login-user-data',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatGridList,
    MatIcon,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './login-user-data.component.html',
  styleUrl: './login-user-data.component.scss',
})
export class LoginUserDataComponent {
  public hide = true;
  public formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public email: FormControl;
  public password: FormControl;

  constructor() {
    this.formBuilder = new FormBuilder();
    
    this.email = new FormControl('', [Validators.required]); 
    this.password = new FormControl('', [Validators.required]); 

    this.formGroup = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  public sumbit() {}
}
