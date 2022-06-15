import { Component } from '@angular/core';
import { card } from 'src/interface/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mSwipe';
  cardList: Array<card> = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "../assets/1.jpeg",
      type: "small",
      like: 12,
      comment: 7,
      views: 4
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "../assets/2.jpeg",
      type: "small",
      like: 12,
      comment: 7,
      views: 4
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "../assets/3.jpeg",
      type: "small",
      like: 12,
      comment: 7,
      views: 4
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "../assets/4.jpeg",
      type: "large",
      like: 12,
      comment: 7,
      views: 4
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "../assets/1.jpeg",
      type: "small",
      like: 12,
      comment: 7,
      views: 4
    }
  ];
}
