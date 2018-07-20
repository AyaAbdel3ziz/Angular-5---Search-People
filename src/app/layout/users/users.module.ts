import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule} from '@angular/material/expansion';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {DragulaModule , DragulaService} from "ng2-dragula/ng2-dragula"

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
    imports: [
        CommonModule, 
        UsersRoutingModule,
        MatCardModule,
        MatExpansionModule,
        DragulaModule,
        AngularFontAwesomeModule


    ],
    declarations: [
        UsersComponent
    ],
    providers:[DragulaService]
})
export class UsersModule {}
