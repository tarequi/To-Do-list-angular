import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import {TasksComponent} from "./componentes/tasks/tasks.component";
import { FooterComponent } from './componentes/footer/footer.component';

const routes: Routes = [
  {path:'',component:TasksComponent},
  {path:'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
