import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenProyectComponent } from './golden-proyect.component';

describe('GoldenProyectComponent', () => {
  let component: GoldenProyectComponent;
  let fixture: ComponentFixture<GoldenProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
