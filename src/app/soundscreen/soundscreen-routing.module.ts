import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SoundScreenComponent }   from './soundscreen.component';

const routes: Routes = [
    {
        path: '',
        component: SoundScreenComponent,
        data: {
            title: 'SoundScreen'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SoundScreenRoutingModule {}
