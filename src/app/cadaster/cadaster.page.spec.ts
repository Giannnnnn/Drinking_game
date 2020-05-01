import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadasterPage } from './cadaster.page';

describe('CadasterPage', () => {
  let component: CadasterPage;
  let fixture: ComponentFixture<CadasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadasterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
