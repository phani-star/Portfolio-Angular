import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list'; // For <mat-list> and <mat-list-item>
import { MatIconModule } from '@angular/material/icon'; // For icons in list items

// Import your local portfolio data
import { PORTFOLIO_DATA } from '../portfolio-data'; // Adjust path if portfolio-data.ts is in a different location

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './education.html',
  styleUrl: './education.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [ // Animation for the wrapper card
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('educationFadeIn', [ // Animation for individual education cards
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class Education { // Using the class name 'Education' as requested
  educationList = PORTFOLIO_DATA.education; // Bind the education data

  constructor() {
    // Optional: Any initialization logic
  }
}
