import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativaComponent } from './normativa.component';

describe('NormativaComponent', () => {
  let component: NormativaComponent;
  let fixture: ComponentFixture<NormativaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormativaComponent]
    });
    fixture = TestBed.createComponent(NormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
