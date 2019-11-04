import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './Componentes/Complementos/nav-menu/nav-menu.component';
import { HomeComponent } from './Componentes/Complementos/home/home.component';
import { LoginComponent } from './Componentes/Complementos/login/login.component';
import { NotFountPageComponent } from './Componentes/Complementos/not-fount-page/not-fount-page.component';
import { RegistroDocenteComponent } from './Componentes/Registrar/registro-docente/registro-docente.component';
import { RegistroActComplementariasComponent } from './Componentes/Registrar/registro-act-complementarias/registro-act-complementarias.component';
import { RegistroPlanAccionComponent } from './Componentes/Registrar/registro-plan-accion/registro-plan-accion.component';
import { RegistroAccionesComponent } from './Componentes/Registrar/registro-acciones/registro-acciones.component';
import { ConsultaDocenteComponent } from './Componentes/Consultas/consulta-docente/consulta-docente.component';
import { ConsultaActComplementariasComponent } from './Componentes/Consultas/consulta-act-complementarias/consulta-act-complementarias.component';
import { ConsultaPlanAccionComponent } from './Componentes/Consultas/consulta-plan-accion/consulta-plan-accion.component';
import { ConsultaAccionesComponent } from './Componentes/Consultas/consulta-acciones/consulta-acciones.component';
import { DesactivarDocenteComponent } from './Componentes/Desactivar/desactivar-docente/desactivar-docente.component';
import { DesactivarActComplementariasComponent } from './Componentes/Desactivar/desactivar-act-complementarias/desactivar-act-complementarias.component';
import { DesactivarPlanAccionComponent } from './Componentes/Desactivar/desactivar-plan-accion/desactivar-plan-accion.component';
import { DesactivarAccionesComponent } from './Componentes/Desactivar/desactivar-acciones/desactivar-acciones.component';
import { ModificarDocenteComponent } from './Componentes/Modificar/modificar-docente/modificar-docente.component';
import { ModificarActComplementariasComponent } from './Componentes/Modificar/modificar-act-complementarias/modificar-act-complementarias.component';
import { ModificarPlanAccionComponent } from './Componentes/Modificar/modificar-plan-accion/modificar-plan-accion.component';
import { ModificarAccionesComponent } from './Componentes/Modificar/modificar-acciones/modificar-acciones.component';
import { HomePageDocenteComponent } from './Componentes/HomePage/home-page-docente/home-page-docente.component';
import { HomePageJefeDepartamentoComponent } from './Componentes/HomePage/home-page-jefe-departamento/home-page-jefe-departamento.component';
import { NavBarraDocenteComponent } from './Componentes/NavBarras/nav-barra-docente/nav-barra-docente.component';
import { NavBarraJefeComponent } from './Componentes/NavBarras/nav-barra-jefe/nav-barra-jefe.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    NotFountPageComponent,
    RegistroDocenteComponent,
    RegistroActComplementariasComponent,
    RegistroPlanAccionComponent,
    RegistroAccionesComponent,
    ConsultaDocenteComponent,
    ConsultaActComplementariasComponent,
    ConsultaPlanAccionComponent,
    ConsultaAccionesComponent,
    DesactivarDocenteComponent,
    DesactivarActComplementariasComponent,
    DesactivarPlanAccionComponent,
    DesactivarAccionesComponent,
    ModificarDocenteComponent,
    ModificarActComplementariasComponent,
    ModificarPlanAccionComponent,
    ModificarAccionesComponent,
    HomePageDocenteComponent,
    HomePageJefeDepartamentoComponent,
    NavBarraDocenteComponent,
    NavBarraJefeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false },
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'registrar', component: RegistroDocenteComponent },
      { path: 'registrar', component: RegistroDocenteComponent, canActivate: [] },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
