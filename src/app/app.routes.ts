import { Routes } from '@angular/router';
import { PloginComponent } from './paginas/plogin/plogin.component';
import { PcadastroComponent } from './paginas/pcadastro/pcadastro.component';
import { PprincipalComponent } from './paginas/pprincipal/pprincipal.component';


export const routes: Routes = [
    {
        path: 'login',
        component: PloginComponent,

    },
    {
        path: 'cadastro',
        component: PcadastroComponent,

    },
    {
      path: 'manthano',
      component: PprincipalComponent,

    },
    {
        path: '',
        redirectTo:'manthano',
        pathMatch: 'full',

    },


];
