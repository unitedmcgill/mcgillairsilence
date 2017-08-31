import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { FibersorbComponent }       from './fibersorb.component';
import { FibersorbRoutingModule }   from './fibersorb-routing.module';

@NgModule({
    imports: [
        FibersorbRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        FibersorbComponent 
    ]
})
export class FibersorbModule { }
