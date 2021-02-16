import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCompComponent } from './coin-comp.component';

describe('CoinCompComponent', () => {
  let component: CoinCompComponent;
  let fixture: ComponentFixture<CoinCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
