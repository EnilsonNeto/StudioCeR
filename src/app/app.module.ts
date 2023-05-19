import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatSelectModule } from '@angular/material/select';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component';

import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ModalSucessComponent } from './shared/modal-sucess/modal-sucess.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    CoursesComponent,
    SchedulingComponent,
    ModalSucessComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    CdkStepperModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatDialogModule,
    [CarouselModule.forRoot()],
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
