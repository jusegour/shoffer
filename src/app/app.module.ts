import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderModule } from './componets/header/header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { NoFoundComponent } from './componets/no-found/no-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NoFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, ReactiveFormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
