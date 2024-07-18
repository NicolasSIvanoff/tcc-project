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

  constructor( private createUserService: CreateUserService,
               private loginService: LoginService)
  { }

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
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  public validateLogin(): void {
   if(this.formLogin.valid) {
      this.loginService.userLogin(this.formLogin.value).subscribe({
        next: (data: any) => {
          if (data.token) {
            this.textModal = 'Login realizado com sucesso!';
            localStorage.setItem('token', data.token);
            this.openModal();
            window.location.href = 'home';
          }
        },
        error: (error: any) => {
          this.textModal = 'Erro ao efetuar login: ' + error;
          this.openModal();
        }
      });
   }
  }

  public validateNewUser(): void {
    if (this.formNewAccount.valid) {
      this.createUserService.createUser(this.formNewAccount.value).subscribe({
        next: (data: any) => {
          this.textModal = 'Usuário criado com sucesso!';
          this.openModal();
          this.formNewAccount.clearValidators();
        },
        error: (error: any) => {
          this.textModal = 'Erro ao criar usuário: ' + error;
          this.openModal();
        }
      });
    } else {
      this.textModal = 'Parece que ainda faltam campos a serem preenchidos :(';
      this.openModal();
    }
  }
  public openModal(): void {
    this.isOpenModal = true;
  }

  public closeModal(): void {
    this.isOpenModal = false;
  }
}
