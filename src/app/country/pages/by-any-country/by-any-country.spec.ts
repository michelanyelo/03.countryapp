import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAnyCountry } from './by-any-country';

describe('ByAnyCountry', () => {
  let component: ByAnyCountry;
  let fixture: ComponentFixture<ByAnyCountry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByAnyCountry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByAnyCountry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
