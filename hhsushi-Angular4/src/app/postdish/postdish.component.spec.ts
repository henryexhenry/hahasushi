import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdishComponent } from './postdish.component';

describe('PostdishComponent', () => {
  let component: PostdishComponent;
  let fixture: ComponentFixture<PostdishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
