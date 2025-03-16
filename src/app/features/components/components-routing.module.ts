import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ParentComponent } from './parent/parent.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'dynamic',
        component: DynamicComponent,
      },
      {
        path: 'parent',
        component: ParentComponent,
      },
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
