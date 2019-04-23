import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialToolsPageComponent } from './social-tools-page.component';

describe('SocialToolsPageComponent', () => {
  let component: SocialToolsPageComponent;
  let fixture: ComponentFixture<SocialToolsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialToolsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialToolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
