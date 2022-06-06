import { Component, OnInit } from '@angular/core';
import { Museum } from '../../models/museum';

@Component({
  selector: 'app-museums-page',
  templateUrl: './museums-page.component.html',
  styleUrls: ['./museums-page.component.scss']
})
export class MuseumsPageComponent implements OnInit {

  public museums:Museum[] = [{
  "id": 1,
  "name": "Renner Inc",
  "imageUrl": "http://dummyimage.com/70x50.png/cc0000/ffffff",
  "location": "Straubel",
  "distance": 16,
  "rating": 2.2,
  "exhibitions": 17
}, {
  "id": 2,
  "name": "Runte Group",
  "imageUrl": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
  "location": "Twin Pines",
  "distance": 40,
  "rating": 2.9,
  "exhibitions": 84
}, {
  "id": 3,
  "name": "Ernser Group",
  "imageUrl": "http://dummyimage.com/200x200.png/cc0000/ffffff",
  "location": "Buena Vista",
  "distance": 33,
  "rating": 4.9,
  "exhibitions": 78
}, {
  "id": 4,
  "name": "King-Ankunding",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Bluejay",
  "distance": 13,
  "rating": 0.6,
  "exhibitions": 77
}, {
  "id": 5,
  "name": "Hessel, Schimmel and Parisian",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Lukken",
  "distance": 11,
  "rating": 0.7,
  "exhibitions": 28
}, {
  "id": 6,
  "name": "Marvin Group",
  "imageUrl": "http://dummyimage.com/200x200.png/cc0000/ffffff",
  "location": "Vernon",
  "distance": 17,
  "rating": 3.2,
  "exhibitions": 43
}, {
  "id": 7,
  "name": "McCullough and Sons",
  "imageUrl": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "location": "Trailsway",
  "distance": 53,
  "rating": 3.3,
  "exhibitions": 45
}, {
  "id": 8,
  "name": "Marquardt Group",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Vermont",
  "distance": 81,
  "rating": 0.6,
  "exhibitions": 13
}, {
  "id": 9,
  "name": "Langosh-Homenick",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Old Gate",
  "distance": 89,
  "rating": 2.1,
  "exhibitions": 47
}, {
  "id": 10,
  "name": "Crooks, Stokes and Corkery",
  "imageUrl": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "location": "Stang",
  "distance": 49,
  "rating": 2.9,
  "exhibitions": 36
}, {
  "id": 11,
  "name": "Schaefer-Ferry",
  "imageUrl": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
  "location": "Monterey",
  "distance": 61,
  "rating": 0.4,
  "exhibitions": 75
}, {
  "id": 12,
  "name": "Smitham, Wolf and Runte",
  "imageUrl": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "location": "Arapahoe",
  "distance": 83,
  "rating": 2.6,
  "exhibitions": 66
}, {
  "id": 13,
  "name": "Ratke-Morissette",
  "imageUrl": "http://dummyimage.com/200x200.png/cc0000/ffffff",
  "location": "Artisan",
  "distance": 13,
  "rating": 1.3,
  "exhibitions": 62
}, {
  "id": 14,
  "name": "Smitham, Feeney and Heathcote",
  "imageUrl": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "location": "Butternut",
  "distance": 48,
  "rating": 3.3,
  "exhibitions": 88
}, {
  "id": 15,
  "name": "Rosenbaum, Schmeler and Shields",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Northwestern",
  "distance": 89,
  "rating": 3.0,
  "exhibitions": 6
}, {
  "id": 16,
  "name": "Lehner, Turcotte and Zemlak",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Village Green",
  "distance": 58,
  "rating": 4.3,
  "exhibitions": 83
}, {
  "id": 17,
  "name": "Brown, Price and Keeling",
  "imageUrl": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "location": "Daystar",
  "distance": 31,
  "rating": 4.1,
  "exhibitions": 74
}, {
  "id": 18,
  "name": "Gaylord Group",
  "imageUrl": "http://dummyimage.com/200x200.png/cc0000/ffffff",
  "location": "Village",
  "distance": 44,
  "rating": 2.3,
  "exhibitions": 63
}, {
  "id": 19,
  "name": "Jacobi and Sons",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Kipling",
  "distance": 75,
  "rating": 4.2,
  "exhibitions": 50
}, {
  "id": 20,
  "name": "Predovic, Satterfield and Rempel",
  "imageUrl": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "location": "Manley",
  "distance": 24,
  "rating": 1.7,
  "exhibitions": 94
}, {
  "id": 21,
  "name": "Watsica, O'Connell and Connelly",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Colorado",
  "distance": 92,
  "rating": 4.4,
  "exhibitions": 45
}, {
  "id": 22,
  "name": "Larson-Zemlak",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Kennedy",
  "distance": 44,
  "rating": 3.0,
  "exhibitions": 87
}, {
  "id": 23,
  "name": "McClure-Mohr",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Ridgeway",
  "distance": 81,
  "rating": 1.9,
  "exhibitions": 5
}, {
  "id": 24,
  "name": "Medhurst, VonRueden and Littel",
  "imageUrl": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
  "location": "Fieldstone",
  "distance": 84,
  "rating": 3.8,
  "exhibitions": 98
}, {
  "id": 25,
  "name": "Green and Sons",
  "imageUrl": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "location": "La Follette",
  "distance": 49,
  "rating": 0.7,
  "exhibitions": 55
}, {
  "id": 26,
  "name": "McDermott-Hintz",
  "imageUrl": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "location": "Cordelia",
  "distance": 86,
  "rating": 3.3,
  "exhibitions": 52
}, {
  "id": 27,
  "name": "Romaguera, Durgan and Lynch",
  "imageUrl": "http://dummyimage.com/200x200.png/cc0000/ffffff",
  "location": "Oxford",
  "distance": 84,
  "rating": 0.6,
  "exhibitions": 93
}, {
  "id": 28,
  "name": "Hamill and Sons",
  "imageUrl": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
  "location": "Orin",
  "distance": 12,
  "rating": 0.9,
  "exhibitions": 84
}, {
  "id": 29,
  "name": "Schimmel-McCullough",
  "imageUrl": "http://dummyimage.com/200x200.png/dddddd/000000",
  "location": "Meadow Valley",
  "distance": 48,
  "rating": 4.5,
  "exhibitions": 59
}, {
  "id": 30,
  "name": "Volkman, Willms and Legros",
  "imageUrl": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
  "location": "Lakewood",
  "distance": 91,
  "rating": 4.1,
  "exhibitions": 55
}];

  constructor() { }

  ngOnInit(): void {
  }

}
