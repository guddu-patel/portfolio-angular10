import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddupdatePostComponent } from './admin-addupdate-post.component';

describe('AdminAddupdatePostComponent', () => {
  let component: AdminAddupdatePostComponent;
  let fixture: ComponentFixture<AdminAddupdatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddupdatePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddupdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
