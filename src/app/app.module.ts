import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component'
import { AuthIntercepterService } from './services/auth-intercepter.service';
@NgModule({
  // declaration de chaque component
  declarations: [
    AppComponent, // component generale de notre application
    AuthentificationComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    //les importation quand a besoin , BrowserModule,AppRoutingModule: 2 impot generer quand nous avons creer le projet 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  /* 
  provide: HTTP_INTERCEPTORS: Cela indique que nous allons fournir un intercepteur (interceptor) pour le mécanisme d'interception des requêtes HTTP dans Angular.
  useClass: AuthIntercepterService: Ici, nous spécifions la classe AuthIntercepterService comme l'intercepteur que nous voulons utiliser pour intercepter les requêtes HTTP sortantes.
  multi: true: Cette propriété est utilisée pour indiquer à Angular que plusieurs intercepteurs peuvent être fournis. Lorsque multi est défini sur true, cela signifie que notre intercepteur ne remplace pas les intercepteurs existants, mais qu'il est ajouté à la liste des intercepteurs déjà fournis.
  */
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
