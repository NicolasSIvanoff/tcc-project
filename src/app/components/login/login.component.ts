import { catchError } from 'rxjs';
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
 public isLoading: boolean = false;

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
    if (this.formLogin.valid) {
      this.isLoading = true; // Exibir modal de carregamento
      this.isOpenModal = true;

      this.loginService.userLogin(this.formLogin.value).subscribe({
        next: (data: any) => {
          this.isLoading = false; // Remover modal de carregamento
          if (data.token) {
            this.textModal = 'Login realizado com sucesso!';
            localStorage.setItem('token', data.token);
            window.location.href = 'home';
          }
        },
        error: (error: any) => {
          this.isLoading = false; // Remover modal de carregamento
          this.textModal = 'Erro ao efetuar login: ' + error;
        },
        complete: () => {
          this.isOpenModal = true; // Manter modal aberto para mensagem final
        },
      });
    }
    else {
      this.textModal = 'Parece que ainda faltam campos a serem preenchidos :(';
      this.openModal();
    }
  }

  public validateNewUser(): void {
    if (this.formNewAccount.valid) {
      this.createUserService.createUser(this.formNewAccount.value).subscribe({
        next: () => {
          this.textModal = 'Usuário criado com sucesso!';
          this.openModal();
          this.formNewAccount.clearValidators();
        },
        error: (error: any) => {
          debugger
          console.log(error.error);

          let errorMessage = 'Erro ao criar usuário.';
          if (error == "Error Code: 500 Message: Http failure response for https://tcc-backend-cwcyaqfqamdhc0br.brazilsouth-01.azurewebsites.net/register: 500 Internal Server Error") {
            errorMessage = error.error.message;
          } else if (error.status === 500) {
            errorMessage = 'Lembre-se de que a sua senha deve conter um caractere especial, um número e uma letra maiúscula!';
          } else if (error.status === 0) {
            errorMessage = 'Lembre-se de utilizar seu nome completo.';
          }

          this.textModal = errorMessage;
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
