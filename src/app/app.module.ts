import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

// Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
// Pages
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SettingsComponent } from './pages/settings/settings.component'; // Adjust the path as per your project structure
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserService } from './services/User/user.service';
import { provideClientHydration } from '@angular/platform-browser';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { CompteBancaireService } from './services/CompteBancaire/compte-bancaire.service';
import { AuthInterceptor } from './auth.interceptor';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { DebiterPopupComponent } from './components/debiter-popup/debiter-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    UserProfileComponent,
    SettingsComponent,
    BankAccountComponent,
    DebiterPopupComponent,
    
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    
  ],
  exports: [
    TablerIconsModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideClientHydration(),
    UserService,
    CompteBancaireService,
     provideHttpClient(withFetch())

  ],
})
export class AppModule {}
