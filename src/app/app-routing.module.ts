import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
  // {
  //   path: 'components',
  //   loadChildren: () =>
  //     import('./features/components/components.module').then(
  //       (m) => m.ComponentsModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
