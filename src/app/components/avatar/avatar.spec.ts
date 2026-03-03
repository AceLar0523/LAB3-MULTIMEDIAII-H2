import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Se cambia 'Avatar' por 'AvatarComponent' para coincidir con el export de avatar.ts
import { AvatarComponent } from './avatar'; 

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Se usa el nombre correcto de la clase: AvatarComponent
      imports: [AvatarComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});