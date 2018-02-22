import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { UniHousingComponent }       from './unihousing.component';
import { UniHousingRoutingModule }   from './unihousing-routing.module';

@NgModule({
    imports: [
        UniHousingRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        UniHousingComponent 
    ]
})
export class UniHousingModule { }
