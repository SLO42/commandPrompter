import { HomeComponent } from './home/home.component';
import { ModelCommandComponent } from './model-command/model-command.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Text2imgComponent } from './text2img/text2img.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'model-command', component: ModelCommandComponent },
  { path: 'text2img', component: Text2imgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
