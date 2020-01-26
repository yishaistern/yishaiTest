import { Component, OnInit } from '@angular/core';
import { UserItem, Gender } from '../../types/types';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent implements OnInit {
  public trackByMode: boolean = true;
  public list: UserItem[];
  public init: UserItem[] = [
    {id: 1, age: 15, gender: Gender.male, meteData: {c: 13, b: 'ff'}, name: 'aa'},
    {id: 2, age: 10, gender: Gender.female, meteData: {c: 5, b: 'ee'}, name: 'bb'},
    {id: 3, age: 13, gender: Gender.male, meteData: {c: 17, b: 'uu'}, name: 'cc'},
    {id: 4, age: 17, gender: Gender.female, meteData: {c: 19, b: 'ff'}, name: 'dd'},
    {id: 5, age: 18, gender: Gender.male, meteData: {c: 21, b: 'kk'}, name: 'ee'},
    {id: 6, age: 19, gender: Gender.female, meteData: {c: 23, b: 'ff'}, name: 'ff'},
    {id: 7, age: 25, gender: Gender.male, meteData: {c: 24, b: 'ff'}, name: 'gg'},
    {id: 8, age: 24, gender: Gender.female, meteData: {c: 26, b: 'ff'}, name: 'hh'},
    {id: 9, age: 26, gender: Gender.male, meteData: {c: 28, b: 'ff'}, name: 'jj'},
    {id: 10, age: 28, gender: Gender.female, meteData: {c: 13, b: 'ff'}, name: 'kk'},
  ];

  public list2: UserItem[] = [
    {id: 1, age: 15, gender: Gender.male, meteData: {c: 13, b: 'ff'}, name: 'aa'},
    {id: 2, age: 10, gender: Gender.female, meteData: {c: 5, b: 'ee'}, name: 'bb'},
    {id: 3, age: 13, gender: Gender.male, meteData: {c: 17, b: 'uu'}, name: 'cc'},
    {id: 4, age: 17, gender: Gender.female, meteData: {c: 19, b: 'ff'}, name: 'dd'},
    {id: 5, age: 18, gender: Gender.male, meteData: {c: 21, b: 'kk'}, name: 'ee'},
    {id: 6, age: 19, gender: Gender.female, meteData: {c: 23, b: 'ff'}, name: 'ff'},
    {id: 7, age: 25, gender: Gender.male, meteData: {c: 24, b: 'ff'}, name: 'gg'},
    {id: 8, age: 24, gender: Gender.female, meteData: {c: 26, b: 'ff'}, name: 'hh'},
    {id: 9, age: 26, gender: Gender.male, meteData: {c: 28, b: 'ff'}, name: 'jj'},
    {id: 10, age: 28, gender: Gender.female, meteData: {c: 13, b: 'ff'}, name: 'kk'},
  ];
  constructor() {
    this.init = [];
    for (let i = 0; i < 10000; i++) {
      this.init.push({id: i, age: (i / 2), gender: Gender.male, meteData: {c: 13, b: 'ff'}, name: 'a' + i});
    }
   }

  ngOnInit() {
    this.initList();
    this.list2 = JSON.parse(JSON.stringify(this.init));
    // setTimeout(() => this.list[0].age = 18, 3000);
  }
  initList() {
    this.list = JSON.parse(JSON.stringify(this.init));
  }

  addOne() {
    this.list.push({id: this.list.length + 15, age: 30, gender: Gender.female, meteData: {c: 13, b: 'ff'}, name: 'qq'});
  }

  removeOne() {
    this.list.pop();
  }
  // trackByFn(index, item) {
  //   return item.id; // or item.id
  // }
  // trackByFn(index, item) {
  //   return index; // or item.id
  // }
  changeObj(item: UserItem, index: number) {
    switch (index % 5) {
      case 0:
        item.age += 1;
        break;
      case 1:
        item.gender = (item.gender === Gender.male) ? Gender.female : Gender.male;
        break;
      case 2:
        item.name = 'c' + item.name;
        break;
      case 3:
        item.meteData = {q: 12};
        break;
      case 4:
        item.meteData.c = item.meteData.c + 1;
        break;
    }
  }

  filterList() {
    this.list = this.list.filter((item , index) => (index % 2) === 0);
  }

}
