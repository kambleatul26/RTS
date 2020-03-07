import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocListPage } from './loc-list.page';

describe('LocListPage', () => {
  let component: LocListPage;
  let fixture: ComponentFixture<LocListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
