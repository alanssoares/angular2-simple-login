import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../_models/user';

@Component({
  moduleId: 'app.login',
  selector: 'cafu-app',
  template: require('./login.html')
})

export class LoginComponent {
  private user: User;

  /**
   * Construtor do componente
   * @param {Router} router
   */
  constructor(private router : Router) {
    this.user = new User();
  }

  /**
   * Efetua a validação do login a partir da página inicial
   * @param {string} username
   * @param {string} password
   */
  login(username : string, password : string) {
    this.user.username = username;
    this.user.password = password;
    if (this.user.username !== '' && this.user.password !== '') {
      this.router.navigate(['/home']);
    }
  }
}
