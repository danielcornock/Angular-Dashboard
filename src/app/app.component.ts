import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('bookmarkInput', { static: false }) input: ElementRef;
  @ViewChild('main', {static: true}) main: ElementRef;

  name: string;
  public nameEntered = false;
  editingBookmarks: boolean;

  ngOnInit(): void {
  }

  setName(): void {
    this.nameEntered = true;
  }

  setBackground(background: string): void {
    console.log(background);
    this.main.nativeElement.style.backgroundImage = `url("${background}"`;
  }

  changeName(name: string): void {
    this.name = name;
  }

  editMode(event: boolean): void {
    this.editingBookmarks = event;
  }



}
