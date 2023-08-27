import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServiceComponent } from '../service/detail-service.component';

describe('DetailServiceComponent', () => {
  let component: DetailServiceComponent;
  let fixture: ComponentFixture<DetailServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailServiceComponent]
    });
    fixture = TestBed.createComponent(DetailServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
