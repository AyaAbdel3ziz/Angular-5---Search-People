import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './sharedComponent/header/header.component';
 
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        // TranslateModule,
        // NgbDropdownModule.forRoot(),
        // NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [LayoutComponent, HeaderComponent]
})
export class LayoutModule {}