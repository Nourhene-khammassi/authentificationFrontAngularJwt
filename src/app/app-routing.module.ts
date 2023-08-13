import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
// path de chaque component 
//Routes : Elles permettent de définir les correspondances entre les URL 
//et les composants Angular qui doivent être affichés lorsque 
//l'utilisateur navigue dans l'application.


const routes: Routes = [{
  path: "authentification", component: AuthentificationComponent
},
{ path: "", component: AuthentificationComponent },

{ path: "home", component: HomeComponent },

{ path: "register", component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
