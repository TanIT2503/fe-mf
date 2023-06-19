import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { StateService } from '@fe-mf/state';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: 'mailbox',
    loadComponent: () =>
      import('mailbox/MailboxComponent').then((m) => m.MailboxComponent),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('calendar/CalendarComponent').then((c) => c.CalendarComponent),
  }
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), StateService],
});
