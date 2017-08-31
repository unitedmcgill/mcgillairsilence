import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'soundscreen',
                loadChildren: './soundscreen/soundscreen.module#SoundScreenModule'
            },
            {
                path: 'unihousing',
                loadChildren: './unihousing/unihousing.module#UniHousingModule'
            },
            {
                path: 'qhaven',
                loadChildren: './qhaven/qhaven.module#QHavenModule'
            },
            {
                path: 'heatscreen',
                loadChildren: './heatscreen/heatscreen.module#HeatScreenModule'
            },
            {
                path: 'sounpak',
                loadChildren: './sounpak/sounpak.module#SounpakModule'
            },
            {
                path: 'tools',
                loadChildren: './tools/tools.module#ToolsModule'
            },
            {
                path: 'fibersorb',
                loadChildren: './fibersorb/fibersorb.module#FibersorbModule'
            },
            {
                path: 'diy',
                loadChildren: './diy/diy.module#DIYModule'
            },
            {
                path: 'productlit',
                loadChildren: './productlit/productlit.module#ProductLitModule'
            },
            {
                path: 'aboutus',
                loadChildren: './aboutus/aboutus.module#AboutUsModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#LocationModule'
            },
            {
                path: 'contactus',
                loadChildren: './contactus/contactus.module#ContactUsModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#CustomersModule'
            }            
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
