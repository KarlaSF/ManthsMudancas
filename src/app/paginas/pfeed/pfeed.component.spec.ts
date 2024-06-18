import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeedComponent } from './pfeed.component';

describe('PfeedComponent', () => {
  let component: PfeedComponent;
  let fixture: ComponentFixture<PfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PfeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
