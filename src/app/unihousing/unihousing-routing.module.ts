import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { UniHousingComponent }   from './unihousing.component';

const routes: Routes = [
    {
        path: '',
        component: UniHousingComponent,
        data: {
            title: 'Pressurized Enclosures'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UniHousingRoutingModule {}
