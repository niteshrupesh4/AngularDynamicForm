import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpromiseComponent } from './testpromise.component';

describe('TestpromiseComponent', () => {
  let component: TestpromiseComponent;
  let fixture: ComponentFixture<TestpromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestpromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestpromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
