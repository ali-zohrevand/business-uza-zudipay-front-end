import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhangeRequestComponent } from './exhange-request.component';

describe('ExhangeRequestComponent', () => {
  let component: ExhangeRequestComponent;
  let fixture: ComponentFixture<ExhangeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhangeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhangeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
