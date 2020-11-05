import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderModule } from './componets/header/header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { NoFoundComponent } from './componets/no-found/no-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderMovilComponent } from './componets/header-movil/header-movil.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NoFoundComponent, HeaderMovilComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    CoreModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
