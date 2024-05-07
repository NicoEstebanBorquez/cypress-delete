import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, ContactComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiButtonModule,
    TuiInputModule,
    TuiInputPasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
