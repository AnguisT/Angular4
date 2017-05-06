import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuntrySearchComponent } from './cuntry-search.component';

describe('CuntrySearchComponent', () => {
  let component: CuntrySearchComponent;
  let fixture: ComponentFixture<CuntrySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuntrySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuntrySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
