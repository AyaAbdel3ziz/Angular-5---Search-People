import { TestBed, inject } from '@angular/core/testing';

import { SwapiService } from './swapi.service';

describe('SwapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwapiService]
    });
  });

  it('should be created', inject([SwapiService], (service: SwapiService) => {
    expect(service).toBeTruthy();
  }));


  // describe('GetAllUsers', () => {
  //   it('get all users ', () => {
  //     expect(helloWorld())
  //         .toEqual('Hello world!');
  //   });
  // });
});
