import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconappComponent } from './iconapp.component';

describe('IconappComponent', () => {
  let component: IconappComponent;
  let fixture: ComponentFixture<IconappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
