import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateUserService} from "../../services/create-user.service";
import {LoginService} from "../../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

 public formNewAccount!: FormGroup;
 public formLogin!: FormGroup;
 public nameFormControl = new FormControl('', [Validators.required]);
 public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 public passwordFormControl = new FormControl('', [Validators.required]);
 public emailLoginFormControl = new FormControl('', [Validators.required, Validators.email]);
 public passwordLoginFormControl = new FormControl('', [Validators.required]);
 public classEffect: boolean = false;
 public isOpenModal: boolean = false;
 public textModal!: string;

  constructor( private createUserService: CreateUserService, private loginService: LoginService ) { }

  ngOnInit(): void {
    this.createFormLogin();
    this.createFormNewAccount();
  }

  public animateClass(): void {
    this.classEffect = !this.classEffect;
  }

  public createFormNewAccount(): void {
      this.formNewAccount = new FormGroup({
        name: this.nameFormControl,
        email: this.emailFormControl,
        password: this.passwordFormControl
      });
  }

  public createFormLogin(): void {
      this.formLogin = new FormGroup({
        email: this.emailLoginFormControl,
        password: this.passwordLoginFormControl
      });
  }

  public validateLogin(): void {
    this.formLogin.valid ? this.loginService.userLogin(this.formLogin.value) : this.openModal();
  }

  public validateNewUser(): void {
    this.formNewAccount.valid ? this.createUserService.createUser(this.formNewAccount.value) : this.openModal();
  }
  public openModal(): void {
    if ((
      this.nameFormControl.valid &&
      this.emailFormControl.valid &&
      this.passwordFormControl.valid
    ) || (this.emailLoginFormControl.valid && this.passwordLoginFormControl.valid)) {
      this.textModal = 'Aguarde um momento! Estamos realizando seu login...'
    } else {
      this.isOpenModal = true;
      this.textModal = 'Parece que ainda faltam campos a serem preenchidos :('
    }
  }

  public closeModal(): void {
    this.isOpenModal = false;
  }


}
