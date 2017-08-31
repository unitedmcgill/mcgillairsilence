import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { HeatScreenComponent }   from './heatscreen.component';

const routes: Routes = [
    {
        path: '',
        component: HeatScreenComponent,
        data: {
            title: 'Oven Panels/Enclosures'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeatScreenRoutingModule {}
