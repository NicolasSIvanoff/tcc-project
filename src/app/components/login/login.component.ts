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
 public classEffect: boolean = false;
 public isOpenModal: boolean = false;
 public textModal!: string;

  constructor( private createUserService: CreateUserService, private loginService: LoginService ) { }

  ngOnInit(): void {
    this.createForms();
  }

  public animateClass(): void {
    this.classEffect = !this.classEffect;
  }

  public createForms(): void {
    this.formNewAccount = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  public validateLogin(): void {
    this.formLogin.valid ? this.loginService.userLogin(this.formLogin.value) : this.openModal();
  }

  public validateNewUser(): void {
    this.formNewAccount.valid ? this.createUserService.createUser(this.formNewAccount.value) : this.openModal();
  }
  public openModal(): void {
    if (this.formLogin.valid || this.formNewAccount.valid ) {
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
