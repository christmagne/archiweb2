import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTrajetsComponent } from './details-trajets.component';

describe('DetailsTrajetsComponent', () => {
  let component: DetailsTrajetsComponent;
  let fixture: ComponentFixture<DetailsTrajetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTrajetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsTrajetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
