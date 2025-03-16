import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ComponentsComponent } from './components.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    DynamicComponent,
    ParentComponent,
    ChildComponent,
    ComponentsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }
