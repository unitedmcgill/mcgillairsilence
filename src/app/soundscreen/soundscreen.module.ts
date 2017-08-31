import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { SoundScreenComponent }       from './soundscreen.component';
import { SoundScreenRoutingModule }   from './soundscreen-routing.module';

@NgModule({
    imports: [
        SoundScreenRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SoundScreenComponent 
    ]
})
export class SoundScreenModule { }
