import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { loadRemoteModule } from '@nrwl/angular/mf';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LoginComponent,
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            loadRemoteModule('dashboard', './Module').then((m) => {
              return m.RemoteEntryModule;
            }),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
