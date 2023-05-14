import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToObjComponent } from './json-to-obj.component';

describe('JsonToObjComponent', () => {
  let component: JsonToObjComponent;
  let fixture: ComponentFixture<JsonToObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToObjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonToObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
