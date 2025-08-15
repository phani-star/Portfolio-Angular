import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips'; // For mat-chip-listbox and mat-chip-row
import { MatIconModule } from '@angular/material/icon'; // Although not used here, often useful for skill icons

// Import your local portfolio data
import { PORTFOLIO_DATA } from '../portfolio-data'; // Adjust path as needed


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [ // Animation for Skills card
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class Skills { // Renamed from Skills for clarity and convention
  skills = PORTFOLIO_DATA.skills; // Directly bind the skills data

  constructor() {
    // Optional: Add any initialization logic here
  }
}
