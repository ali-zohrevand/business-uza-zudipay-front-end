import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicMainComponent } from './arabic-main.component';

describe('ArabicMainComponent', () => {
  let component: ArabicMainComponent;
  let fixture: ComponentFixture<ArabicMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabicMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
