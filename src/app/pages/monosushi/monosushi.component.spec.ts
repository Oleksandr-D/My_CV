import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonosushiComponent } from './monosushi.component';

describe('MonosushiComponent', () => {
  let component: MonosushiComponent;
  let fixture: ComponentFixture<MonosushiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonosushiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonosushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
