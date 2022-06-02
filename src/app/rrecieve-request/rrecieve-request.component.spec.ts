import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrecieveRequestComponent } from './rrecieve-request.component';

describe('RrecieveRequestComponent', () => {
  let component: RrecieveRequestComponent;
  let fixture: ComponentFixture<RrecieveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrecieveRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RrecieveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
