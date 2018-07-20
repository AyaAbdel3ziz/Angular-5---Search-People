import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './layout/search/search.component';
import { UsersComponent } from './layout/users/users.component';
import { APP_BASE_HREF } from '@angular/common';
import { SwapiService } from './services/swapi.service';

describe('AppComponent', () => {
  const routes : Routes = [
    { path : 'search' , component : SearchComponent},
    { path : 'users' , component : UsersComponent },
    { path : '' , redirectTo : '/search' , pathMatch: 'full'}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchComponent
      ],
      imports: [
        RouterModule.forRoot(routes)
      ],
      providers: [
        { provide: APP_BASE_HREF , useValue: '/'},
        SwapiService
      ]
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   // expect(compiled.querySelector('h1').textContent).toContain('Welcome to Cloudinn-Task!');
  // }));
});
