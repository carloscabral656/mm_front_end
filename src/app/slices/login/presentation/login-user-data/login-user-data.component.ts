import { Component, OnInit, inject } from '@angular/core';
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
import { Store } from '@ngrx/store';
import { loginActions } from '../../store/actions';
import ICredential from '../../../shared/interfaces/ICredential';

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
  public store: Store;

  constructor() {
    this.formBuilder = new FormBuilder();
    
    this.email = new FormControl<string>('', [Validators.required]); 
    this.password = new FormControl<string>('', [Validators.required]); 

    this.formGroup = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });

    this.store = inject(Store);
  }

  public sumbit() {
    const credentials: ICredential = {
      email: this.email.value,
      password: this.password.value
    };
    this.store.dispatch(loginActions.sendLoginRequest({credentials}));
  }
}
