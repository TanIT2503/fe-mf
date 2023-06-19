import { enableProdMode } from "@angular/core";

import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { MailboxRoutes } from "./app/mailbox/routes";
import { Routes, provideRouter } from "@angular/router";
import { StateService } from "@fe-mf/state";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mailbox',
    pathMatch: 'full'
  },
  ...MailboxRoutes,
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    StateService
  ],
})

