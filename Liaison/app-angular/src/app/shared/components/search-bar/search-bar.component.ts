import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  faSearch = faSearch;
  searchText: string;
  @Input() type: string;
  @Output() handleSearch: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.handleSearch.emit(this.searchText);
  }
}
