// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { CoverPage } from './cover-page/cover-page'; // Import the CoverPage component
import { AboutMe } from './about-me/about-me'; // Import AboutMeComponent
import { Skills } from './skills/skills'; // Import the Skills component
import { Projects } from './projects/projects'; // Import the Projects component
import { Education } from './education/education'; // Import the Education component

import { Experience } from './experience/experience'; // Import the Experience component
import { Certifications } from './certifications/certifications'; // Import the Certifications component
import { Contact } from './contact/contact'; // Import the Contact component


export const routes: Routes = [
  { path: '', component: CoverPage }, // Render CoverPage at root for index.html
  { path: 'cover', component: CoverPage },
  { path: 'about', component: AboutMe },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'education', component: Education },
  { path: 'experience', component: Experience },
  { path: 'certifications', component: Certifications },
  { path: 'contact', component: Contact },
  { path: '**', component: CoverPage } // Render CoverPage for any unmatched routes
];
