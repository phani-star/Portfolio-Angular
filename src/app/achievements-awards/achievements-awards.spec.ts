import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsAwards } from './achievements-awards';

describe('AchievementsAwards', () => {
  let component: AchievementsAwards;
  let fixture: ComponentFixture<AchievementsAwards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsAwards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsAwards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
