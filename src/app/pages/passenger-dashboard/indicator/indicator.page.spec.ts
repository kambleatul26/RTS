import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicatorPage } from './indicator.page';

describe('IndicatorPage', () => {
  let component: IndicatorPage;
  let fixture: ComponentFixture<IndicatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
