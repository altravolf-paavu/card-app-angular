import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tree",
      username: "nature",
      imgURL: "assets/imgs/tree.jpeg",
      content: "Saw this awesome tree during my hiking today."
    },
    {
      title: "Snowy Mountaine",
      username: "mountainlover",
      imgURL: "assets/imgs/mountain.jpeg",
      content: "Here is a picture of snowy mountain."
    },
    {
      title: "Mountain Biking",
      username: "biker69",
      imgURL: "assets/imgs/biking.jpeg",
      content: "I did some biking today."
    },
    {
      title: "Mountain Biking",
      username: "biker69",
      imgURL: "assets/imgs/biking.jpeg",
      content: "I did some biking today."
    }
  ]
}
