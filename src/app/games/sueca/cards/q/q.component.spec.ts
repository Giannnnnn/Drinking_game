import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QComponent } from './q.component';

describe('QComponent', () => {
  let component: QComponent;
  let fixture: ComponentFixture<QComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
