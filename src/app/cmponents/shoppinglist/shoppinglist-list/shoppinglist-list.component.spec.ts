import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglistListComponent } from './shoppinglist-list.component';

describe('ShoppinglistListComponent', () => {
  let component: ShoppinglistListComponent;
  let fixture: ComponentFixture<ShoppinglistListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppinglistListComponent]
    });
    fixture = TestBed.createComponent(ShoppinglistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
