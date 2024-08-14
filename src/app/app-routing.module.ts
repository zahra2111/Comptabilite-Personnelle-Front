import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import {BankAccountComponent } from './pages/bank-account/bank-account.component';
import { SettingsComponent } from './pages/settings/settings.component'; // Adjust the path as per your project structure
import { ModelePopupComponent } from './components/modele-popup/modele-popup.component';
import { ReleverPopupComponent } from './components/relever-popup/relever-popup.component';

import { ExporterPopupComponent } from './components/exporter-popup/exporter-popup.component';
import { GererPopupComponent } from './components/gerer-popup/gerer-popup.component';
import { ModifierPopupComponent } from './components/modifier-popup/modifier-popup.component';
import { SelectionerPopupComponent } from './components/selectioner-popup/selectioner-popup.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'consultation',
        loadChildren: () =>
          import('./pages/consultation/consultation.module').then((m) => m.ConsultationModule),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'relever',
        component: ReleverPopupComponent,
      },
      {
        path: 'exporter',
        component: ExporterPopupComponent,
      },
      {
        path: 'gerer',
        component: GererPopupComponent,
      },
      {
        path: 'modifier',
        component: ModifierPopupComponent,
      },
      {
        path: 'selectioner',
        component: SelectionerPopupComponent,
      },
      
      
      

    
    
      {
        path: 'bank-account',
        component: BankAccountComponent,
      },
      
      {
        path: 'settings',
        component: SettingsComponent ,
      }
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
