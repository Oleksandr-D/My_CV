import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamSiteComponent } from './my-team-site.component';

describe('MyTeamSiteComponent', () => {
  let component: MyTeamSiteComponent;
  let fixture: ComponentFixture<MyTeamSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
