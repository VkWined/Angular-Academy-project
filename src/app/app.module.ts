import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { StudentsTabComponent } from './students-tab/students-tab.component';
import { CoursesTabComponent } from './courses-tab/courses-tab.component';
import { ProjectsTabComponent } from './projects-tab/projects-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponentComponent,
    StudentsTabComponent,
    CoursesTabComponent,
    ProjectsTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatTabsModule,
    MatInputModule, 
    MatButtonModule, 
    MatCardModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
