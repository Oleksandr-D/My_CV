import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTasksComponent } from './angular-tasks.component';

describe('AngularTasksComponent', () => {
  let component: AngularTasksComponent;
  let fixture: ComponentFixture<AngularTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
