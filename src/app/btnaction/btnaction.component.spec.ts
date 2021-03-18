import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnactionComponent } from './btnaction.component';

describe('BtnactionComponent', () => {
  let component: BtnactionComponent;
  let fixture: ComponentFixture<BtnactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
