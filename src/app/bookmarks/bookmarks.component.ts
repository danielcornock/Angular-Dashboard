import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
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

  @Input() editMode: boolean;

  private adding: boolean;
  private newBookmarkId;
  private newBookmarkName: string;
  private newBookmarkUrl: string;
  private newImageUrl: string;

  bookmarks: Bookmark[] = [];


  ngOnInit() {
    if (!this.bookmarks.length) {
      this.newBookmarkId = 0;
    }
  }

  nowAdding(): void {
    this.adding = true;
  }

  cancelAdd(): void {
    this.adding = false;
  }

  addBookmark(): void {
    // Check inputs have been entered
    if (!this.newBookmarkName || !this.newBookmarkUrl) {
      alert('You must fill in both inputs');
      this.onClicked.emit();
      return;
    }
    this.adding = false;
    // Format url correctly
    if (!this.newBookmarkUrl.includes('http')) {
      this.newBookmarkUrl = `https://${this.newBookmarkUrl}`;
    }
    // If no image url is entered, try and fetch the favicon
    if (!this.newImageUrl) {
      this.newImageUrl = `${this.newBookmarkUrl}/favicon.ico`;
    }
    // Push new bookmark to bookmark array
    const newBookmark: Bookmark = {
      id: this.newBookmarkId,
      name: this.newBookmarkName,
      url: this.newBookmarkUrl,
      favicon: this.newImageUrl,
      editing: false
    };
    this.bookmarks.push(newBookmark);
    // Reset fields and increment ID for next bookmark
    this.newBookmarkName = '';
    this.newBookmarkUrl = '';
    this.newImageUrl = '';
    this.newBookmarkId++;
  }

  deleteBookmark(id: number): void {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  }

  editBookmark(id: number): void {
    this.bookmarks[this.bookmarks.findIndex(element => element.id === id)].editing = true;
  }

}
