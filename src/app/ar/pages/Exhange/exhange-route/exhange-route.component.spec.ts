import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhangeRouteComponent } from './exhange-route.component';

describe('ExhangeRouteComponent', () => {
  let component: ExhangeRouteComponent;
  let fixture: ComponentFixture<ExhangeRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhangeRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhangeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
