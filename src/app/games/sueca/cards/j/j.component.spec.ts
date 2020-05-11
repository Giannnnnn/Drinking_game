import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JComponent } from './j.component';

describe('JComponent', () => {
  let component: JComponent;
  let fixture: ComponentFixture<JComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
