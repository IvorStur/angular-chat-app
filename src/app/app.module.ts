import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './main/header/header.component';
import { UserService } from './services/user.service';
import { LeftPartComponent } from './main/left-part/left-part.component';
import { MiddlePartComponent } from './main/middle-part/middle-part.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    LeftPartComponent,
    MiddlePartComponent
  ],
  bootstrap: [AppComponent],
  providers: [GuardGuard, StudentService, UserService],
})
export class AppModule {}
