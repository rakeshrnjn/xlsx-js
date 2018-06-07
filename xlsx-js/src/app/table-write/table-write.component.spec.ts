import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWriteComponent } from './table-write.component';

describe('TableWriteComponent', () => {
  let component: TableWriteComponent;
  let fixture: ComponentFixture<TableWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
