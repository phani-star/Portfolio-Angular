import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips'; // For displaying technologies
import { MatIconModule } from '@angular/material/icon'; // If you want to add icons later

// Import your local portfolio data
import { PORTFOLIO_DATA } from '../portfolio-data'; // Adjust path if portfolio-data.ts is in a different location


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule // Include MatIconModule if needed
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
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
    trigger('jobFadeIn', [ // Animation for individual job cards
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class Experience { // Using the class name 'Experience' as requested
  experienceList = PORTFOLIO_DATA.experience; // Bind the experience data

  constructor() {
    // Optional: Any initialization logic
  }

  getDuration(startDate: string, endDate: string | 'Present'): string {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Difference in days

    const years = Math.floor(diffDays / 365);
    const remainingDays = diffDays % 365;
    const months = Math.floor(remainingDays / 30); // Approximate months

    let durationString = '';
    if (years > 0) {
      durationString += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
      if (durationString) durationString += ' ';
      durationString += `${months} month${months > 1 ? 's' : ''}`;
    }

    if (!durationString) return 'Less than a month'; // For very short durations
    return durationString;
  }
}
