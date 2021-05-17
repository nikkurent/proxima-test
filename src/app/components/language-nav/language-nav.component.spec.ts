import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageNavComponent } from './language-nav.component';

describe('LanguageNavComponent', () => {
  let component: LanguageNavComponent;
  let fixture: ComponentFixture<LanguageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
