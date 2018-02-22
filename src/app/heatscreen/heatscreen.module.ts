import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { HeatScreenComponent }       from './heatscreen.component';
import { HeatScreenRoutingModule }   from './heatscreen-routing.module';

@NgModule({
    imports: [
        HeatScreenRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        HeatScreenComponent 
    ]
})
export class HeatScreenModule { }
