import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoResizerComponent } from './photo-resizer.component';

describe('PhotoResizerComponent', () => {
  let component: PhotoResizerComponent;
  let fixture: ComponentFixture<PhotoResizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoResizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
