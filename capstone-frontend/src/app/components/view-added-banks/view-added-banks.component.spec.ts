import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddedBanksComponent } from './view-added-banks.component';

describe('ViewAddedBanksComponent', () => {
  let component: ViewAddedBanksComponent;
  let fixture: ComponentFixture<ViewAddedBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddedBanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAddedBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
