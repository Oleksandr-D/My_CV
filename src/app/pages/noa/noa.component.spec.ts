import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoaComponent } from './noa.component';

describe('NoaComponent', () => {
  let component: NoaComponent;
  let fixture: ComponentFixture<NoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
