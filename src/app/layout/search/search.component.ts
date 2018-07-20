import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '../../../../node_modules/@angular/forms';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  userName : string;

  constructor(private swapiService : SwapiService) { }

  ngOnInit() {
  }


  /**
 * Summary .
 *
 * This Function Should Add The input String To swapiService To Pass it
 * To User Component
 */
  Search(){
    this.swapiService.AddData(this.userName);
  }

}
