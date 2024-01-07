  import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormMailService } from './Services/form-mail.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarFormComponent } from './calendar-old/calendar-form.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

import { ActivitiesComponent } from './activities/activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryPopupComponent } from './gallery-popup/gallery-popup.component';
import { BookingComponent } from './booking/booking.component';
import { NormativaComponent } from './normativa/normativa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PricesComponent,
    ContactComponent,
    CalendarComponent,
    CalendarFormComponent,
    ContactFormComponent,
    ActivitiesComponent,
    GalleryComponent,
    GalleryPopupComponent,
    BookingComponent,
    NormativaComponent
  ],
  imports: [
    HeaderComponent,
    CommonModule,
    NgIf,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FooterComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatStepperModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [FormMailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
