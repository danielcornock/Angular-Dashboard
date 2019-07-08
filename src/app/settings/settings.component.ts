import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingsOpen = false;
  editMode = false;

  @Output() backgroundImageEmit = new EventEmitter<string>();
  backgroundImage: string;

  @Output() nameEmit = new EventEmitter<string>();
  name: string;

  @Output() editModeEmit = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  toggleEdit(): void {
    this.editMode = !this.editMode;
  }

  toggleSettings(): void {
    this.settingsOpen = !this.settingsOpen;
  }

  changeName(): void {
    if (this.name) {
      this.nameEmit.emit(this.name);
      this.name = '';
    } else {
      alert('Please enter a valid name');
    }
  }

  changeBackground(): void {
    if (this.urlExists(this.backgroundImage)) {
      console.log('URL is valid');
      this.backgroundImageEmit.emit(this.backgroundImage);
    } else {
      console.error('URL is invalid');
    }
  }

  urlExists(url) {
    const http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status !== 404) {
      return true;
    }
  }
}


