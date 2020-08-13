import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverEffectPipe } from './hover-effect.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { LoginComponent } from './login/login.component';
import { TodoModule } from './todo/todo.module';
import { DataBindingTutorialSectionComponent } from './data-binding-tutorial-section/data-binding-tutorial-section.component';
import { NgStyleAndNgClassTutorialComponent } from './ng-style-and-ng-class-tutorial/ng-style-and-ng-class-tutorial.component';
import { NgForTutorialComponent } from './ng-for-tutorial/ng-for-tutorial.component';
import { SwitchCaseTutorialComponent } from './switch-case-tutorial/switch-case-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverEffectPipe,
    TasksComponent,
    AuthorizeComponent,
    LoginComponent,
    DataBindingTutorialSectionComponent,
    NgStyleAndNgClassTutorialComponent,
    NgForTutorialComponent,
    SwitchCaseTutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
