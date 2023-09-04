import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglistViewComponent } from './shoppinglist-view.component';

describe('ShoppinglistViewComponent', () => {
  let component: ShoppinglistViewComponent;
  let fixture: ComponentFixture<ShoppinglistViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppinglistViewComponent]
    });
    fixture = TestBed.createComponent(ShoppinglistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
