import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Register } from './components/register/register';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Register
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormlyMaterialModule,
    FormlyModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
