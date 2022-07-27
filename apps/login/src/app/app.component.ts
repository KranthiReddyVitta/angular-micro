import { Component } from '@angular/core';
import { UserService } from '@angularmicro/shared/data-access-user';

@Component({
  selector: 'angularmicro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login';

  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService) {}
  
  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
