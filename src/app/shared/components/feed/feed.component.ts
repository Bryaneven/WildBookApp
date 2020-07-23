import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wdb-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
 @Input() posts = [1, 2, 1, 1, 1, 1];
  constructor() { }

  ngOnInit(): void {
  }

}
