import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, NgOptimizedImage],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
