import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCompareComponent } from './string-compare.component';

describe('StringCompareComponent', () => {
  let component: StringCompareComponent;
  let fixture: ComponentFixture<StringCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
