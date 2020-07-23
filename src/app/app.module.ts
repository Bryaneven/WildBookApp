import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { SignupComponent } from './pages/auth/components/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/home/components/post/post.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ProfilInfoComponent } from './pages/profil/components/profil-info/profil-info.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { FriendsConnectedListComponent } from './shared/components/friends-connected-list/friends-connected-list.component';
import { ChatboxComponent } from './shared/components/chatbox/chatbox.component';
import { SearchbarComponent } from './shared/components/searchbar/searchbar.component';
import { FeedComponent } from './shared/components/feed/feed.component';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PostComponent,
    ProfilComponent,
    ProfilInfoComponent,
    SideMenuComponent,
    FriendsConnectedListComponent,
    ChatboxComponent,
    SearchbarComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatAutocompleteModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
