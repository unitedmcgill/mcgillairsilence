import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { SounpakComponent }       from './sounpak.component';
import { SounpakRoutingModule }   from './sounpak-routing.module';

@NgModule({
    imports: [
        SounpakRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SounpakComponent 
    ]
})
export class SounpakModule { }
