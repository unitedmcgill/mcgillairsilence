import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { DIYComponent }       from './diy.component';
import { DIYRoutingModule }   from './diy-routing.module';

@NgModule({
    imports: [
        DIYRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        DIYComponent 
    ]
})
export class DIYModule { }
