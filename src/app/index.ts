import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {LoginComponent} from './components/login/login';
import {HomeComponent} from './components/home/home';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
