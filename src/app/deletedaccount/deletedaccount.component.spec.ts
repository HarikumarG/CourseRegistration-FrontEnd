import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedaccountComponent } from './deletedaccount.component';

describe('DeletedaccountComponent', () => {
  let component: DeletedaccountComponent;
  let fixture: ComponentFixture<DeletedaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
