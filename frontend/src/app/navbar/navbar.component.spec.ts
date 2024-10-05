import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { RouterLinkWithHref, RouterOutlet, RouterLinkActive } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a router-outlet', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const routerOutlet = debugElement.query(By.directive(RouterOutlet));
    expect(routerOutlet).not.toBeNull();
  });

  it('should have links with routerLink directives', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const links = debugElement.queryAll(By.directive(RouterLinkWithHref));
    expect(links.length).toBe(4);

    const menuLink = debugElement.query(By.css('a[routerLink="/menu"]'));
    const listLink = debugElement.query(By.css('a[routerLink="/list"]'));
    const callendarLink = debugElement.query(By.css('a[routerLink="/callendar"]'));
    const boardLink = debugElement.query(By.css('a[routerLink="/board"]'));

    expect(menuLink).not.toBeNull();
    expect(listLink).not.toBeNull();
    expect(callendarLink).not.toBeNull();
    expect(boardLink).not.toBeNull();
  });

  it('should highlight active links', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const routerLinkActive = debugElement.queryAll(By.directive(RouterLinkActive));
    expect(routerLinkActive.length).toBe(4);
  });
});
