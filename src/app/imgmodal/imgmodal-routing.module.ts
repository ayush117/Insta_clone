import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgmodalPage } from './imgmodal.page';

const routes: Routes = [
  {
    path: '',
    component: ImgmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgmodalPageRoutingModule {}
