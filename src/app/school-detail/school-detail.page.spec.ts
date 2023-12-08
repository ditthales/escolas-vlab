import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SchoolDetailPage } from './school-detail.page';

describe('SchoolDetailPage', () => {
  let component: SchoolDetailPage;
  let fixture: ComponentFixture<SchoolDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SchoolDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
