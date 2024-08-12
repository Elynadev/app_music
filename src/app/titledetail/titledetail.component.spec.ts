import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledetailComponent } from './titledetail.component';

describe('TitledetailComponent', () => {
  let component: TitledetailComponent;
  let fixture: ComponentFixture<TitledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitledetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
