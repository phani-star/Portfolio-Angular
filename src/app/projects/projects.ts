import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

// Import your local portfolio data
import { PORTFOLIO_DATA } from '../portfolio-data'; // Adjust path if portfolio-data.ts is in a different location

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [ // Animation for the wrapper card
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('projectSlideIn', [ // Animation for individual project cards
      state('left', style({ transform: 'translateX(0)', opacity: 1 })),
      state('right', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('void => left', [ // When project enters from void to 'left' state
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.7s ease-out')
      ]),
      transition('void => right', [ // When project enters from void to 'right' state
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.7s ease-out')
      ]),
    ])
  ]
})
export class Projects { // Using the class name 'Projects' as requested
  projects = PORTFOLIO_DATA.projects; // Bind the projects data

  constructor() {
    // Optional: Any initialization logic
  }
}
