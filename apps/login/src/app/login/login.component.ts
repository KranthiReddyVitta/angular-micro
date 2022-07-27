import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@angularmicro/shared/data-access-user';

@Component({
  selector: 'angularmicro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title = 'login';

  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // this.isLoggedIn$.subscribe((val) => {
    //   if (val) {
    //     this.router.navigateByUrl('dashboard');
    //   }
    // });
  }

  login() {
    //this.userService.checkCredentials(this.username, this.password);
    this.router.navigateByUrl('/dashboard');
  }
}
