import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { QHavenComponent }   from './qhaven.component';

const routes: Routes = [
    {
        path: '',
        component: QHavenComponent,
        data: {
            title: 'Personnel Enclosures'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QHavenRoutingModule {}
