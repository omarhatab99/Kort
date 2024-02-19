import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAction } from './card-action.component';

describe('ProductShoppingActionComponent', () => {
  let component: CardAction;
  let fixture: ComponentFixture<CardAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAction ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
