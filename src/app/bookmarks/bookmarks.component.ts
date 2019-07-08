import {ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Bookmark} from './bookmark';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  @Output()
  public onClicked: EventEmitter<void> = new EventEmitter();

  @ViewChild('bookmarkInput', { static: false })
  public input: ElementRef;

  private adding: boolean;
  private newBookmarkName: string;
  private newBookmarkUrl: string;
  private newImageUrl: string;

  bookmarks: Bookmark[] = [];
  private _changeDetector: ChangeDetectorRef;


  constructor(changeDetector: ChangeDetectorRef) {
    this._changeDetector = changeDetector;
  }

  ngOnInit() {

  }

  nowAdding(): void {
    this.adding = true;
    this._changeDetector.detectChanges();
    this.input.nativeElement.focus();
  }

  cancelAdd(): void {
    this.adding = false;
  }

  addBookmark(): void {
    if (!this.newBookmarkName || !this.newBookmarkUrl) {
      alert('You must fill in both inputs');
      this.onClicked.emit();
      return;
    }
    this.adding = false;
    if (!this.newBookmarkUrl.includes('http')) {
      this.newBookmarkUrl = `https://${this.newBookmarkUrl}`;
    }
    if (!this.newImageUrl) {
      this.newImageUrl = `${this.newBookmarkUrl}/favicon.ico`;
    }
    const newBookmark: Bookmark = {
      name: this.newBookmarkName,
      url: this.newBookmarkUrl,
      favicon: this.newImageUrl
    };
    this.bookmarks.push(newBookmark);
    this.newBookmarkName = '';
    this.newBookmarkUrl = '';
    this.newImageUrl = '';
  }

}
