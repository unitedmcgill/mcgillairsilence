import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { FibersorbComponent }   from './fibersorb.component';

const routes: Routes = [
    {
        path: '',
        component: FibersorbComponent,
        data: {
            title: 'Curtain Systems'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FibersorbRoutingModule {}
