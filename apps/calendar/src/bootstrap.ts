import { enableProdMode } from "@angular/core";

import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { Routes, provideRouter } from "@angular/router";
import { StateService } from "@fe-mf/state";
import { CalendarRoutes } from "./app/featured/routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full'
  },
  ...CalendarRoutes,
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

