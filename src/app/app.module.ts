import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { SkillComponent } from './component/skill/skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './component/education/education.component';
import { ExprianceComponent } from './component/expriance/expriance.component';
import { LoginComponent } from './component/securty/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './component/securty/table/table.component';
import { DcustomeDirective } from './component/dcustome-.directive';
import { CustomepsPipe } from './customeps.pipe';
import { PasswordComponent } from './genrator/password/password.component';
import { TypegameComponent } from './password/typegame/typegame.component';
import { FormatePipe } from './formatepipe/formate.pipe';
import { PipeformateComponent } from './formatepipe/pipeformate/pipeformate.component';

// import {metToolbarModule} from '@angular/toolbar/'

const route:Routes=[
   { path:'password',component:PasswordComponent},
   { path:'typegame',component:TypegameComponent},
{path:'child',component:SkillComponent},
{path:'about',component:AboutmeComponent},
 {path:'ex',component:ExprianceComponent},

{path:"login",component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutmeComponent,
    SkillComponent,
    EducationComponent,
    ExprianceComponent,
    LoginComponent,
    TableComponent,
    DcustomeDirective,
    CustomepsPipe,
    PasswordComponent,
    TypegameComponent,
    FormatePipe,
    PipeformateComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
