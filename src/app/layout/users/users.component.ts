import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { DragulaService } from 'ng2-dragula';
import { Http } from '../../../../node_modules/@angular/http';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  userName : string;
  panelOpenState = false;
  usersLength: number;
  homeWorld ;




  constructor(private swapiService : SwapiService,
    private dragulaService: DragulaService) {
      /**
      * Summary .
      *
      * This is Drag and Drop Options
      *
      */
      dragulaService.setOptions("reorder", {
        removeOnSpill: true
      });
  }

  ngOnInit() {
    this.swapiService.currentString.subscribe(message => this.userName = message);


    this.swapiService.GetUserByName(this.userName)
    .subscribe(data => {
      this.users = data;
      // for(let prop of Object.keys(data)){
      //   this.swapiService.GetHomeWorld(data[prop].homeworld).subscribe(res => {
      //     this.homeWorld = res;
      //   });
      // }
      this.usersLength = this.users.length;
    });
  }

  ngOnDestroy(){
    this.dragulaService.destroy('reorder');
  }

}
