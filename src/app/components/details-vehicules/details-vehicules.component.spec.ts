import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVehiculesComponent } from './details-vehicules.component';

describe('DetailsVehiculesComponent', () => {
  let component: DetailsVehiculesComponent;
  let fixture: ComponentFixture<DetailsVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsVehiculesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
