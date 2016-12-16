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

  }

  /**
   * Efetua a validação do login a partir da página inicial
   * @param {string} username
   * @param {string} password
   */
  login(username : string, password : string) {
    if (username !== '' && password !== '') {
      this.user = new User(username, password);
      // call a service to verify if the user is authorized and redirect to the home
      this.router.navigate(['/home']);
    }
  }
}
