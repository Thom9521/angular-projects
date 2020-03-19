import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./notfound.component";
import { GitHubComponent } from "./github.component";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { routing } from "./app.routing";

import { GitHubUserComponent } from "./githubuser.component";
import { LoginService } from "./login.service";
import { AuthGuard } from "./auth-guard.service";
import { LoginComponent } from "./login.component";
import { PreventUnsavedChangesGuard } from "./prevent-unsaved-changes-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubComponent,
    GitHubUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService, AuthGuard, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
