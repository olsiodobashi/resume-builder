import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicTwoComponent } from './classic-two.component';

describe('ClassicTwoComponent', () => {
  let component: ClassicTwoComponent;
  let fixture: ComponentFixture<ClassicTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
