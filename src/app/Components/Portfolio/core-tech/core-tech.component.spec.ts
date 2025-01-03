import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTechComponent } from './core-tech.component';

describe('CoreTechComponent', () => {
  let component: CoreTechComponent;
  let fixture: ComponentFixture<CoreTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
