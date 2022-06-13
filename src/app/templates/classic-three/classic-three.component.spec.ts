import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicThreeComponent } from './classic-three.component';

describe('ClassicThreeComponent', () => {
  let component: ClassicThreeComponent;
  let fixture: ComponentFixture<ClassicThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
