import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { NormativaComponent } from './normativa/normativa.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'prices',
    component: PricesComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'normativa',
    component: NormativaComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
