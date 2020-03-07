import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferOwnershipPage } from './transfer-ownership.page';

describe('TransferOwnershipPage', () => {
  let component: TransferOwnershipPage;
  let fixture: ComponentFixture<TransferOwnershipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferOwnershipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferOwnershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
