import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicOneComponent } from './classic-one.component';

describe('ClassicOneComponent', () => {
  let component: ClassicOneComponent;
  let fixture: ComponentFixture<ClassicOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
