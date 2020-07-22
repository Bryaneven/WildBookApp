import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
