import { Routes } from '@angular/router';

export const CalendarRoutes: Routes = [
  {
    path: 'calendar',
    loadComponent: () =>
      import('./calendar/calendar.component').then((c) => c.CalendarComponent),
  },

];
