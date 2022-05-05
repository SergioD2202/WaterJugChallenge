import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphCardComponent } from './paragraph-card.component';

describe('ParagraphCardComponent', () => {
  let component: ParagraphCardComponent;
  let fixture: ComponentFixture<ParagraphCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
