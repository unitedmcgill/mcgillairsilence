import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { QHavenComponent }       from './qhaven.component';
import { QHavenRoutingModule }   from './qhaven-routing.module';

@NgModule({
    imports: [
        QHavenRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        QHavenComponent 
    ]
})
export class QHavenModule { }
