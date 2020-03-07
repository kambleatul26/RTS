import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainsPage } from './trains.page';

describe('TrainsPage', () => {
  let component: TrainsPage;
  let fixture: ComponentFixture<TrainsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
