import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenComponent } from './ten.component';

describe('TenComponent', () => {
  let component: TenComponent;
  let fixture: ComponentFixture<TenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
