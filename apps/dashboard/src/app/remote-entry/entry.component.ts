import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@angularmicro/shared/data-access-user';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'angularmicro-dashboard-entry',
  template: ` <div class="dashboard-nav">Admin Dashboard</div>
    <div *ngIf="isLoggedIn$ | async; else signIn">
      You are authenticated so you can see this content.
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>`,
})
export class RemoteEntryComponent {
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        this.router.navigateByUrl('');
      });
  }
}
