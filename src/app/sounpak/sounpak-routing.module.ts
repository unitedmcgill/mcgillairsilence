import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SounpakComponent }   from './sounpak.component';

const routes: Routes = [
    {
        path: '',
        component: SounpakComponent,
        data: {
            title: 'Silencers'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SounpakRoutingModule {}
