import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RComponent } from './r.component';

describe('RComponent', () => {
  let component: RComponent;
  let fixture: ComponentFixture<RComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
