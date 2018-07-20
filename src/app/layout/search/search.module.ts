import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        CommonModule, 
        SearchRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        SearchComponent
    ]
})
export class SearchModule {}
