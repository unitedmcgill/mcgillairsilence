import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { DIYComponent }   from './diy.component';

const routes: Routes = [
    {
        path: '',
        component: DIYComponent,
        data: {
            title: 'DIY Noise Control'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DIYRoutingModule {}
