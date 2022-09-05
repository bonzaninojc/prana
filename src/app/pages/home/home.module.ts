import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NavbarModule],
})
export class HomeModule {}
