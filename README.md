# Interactive-Map
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![under development](https://img.shields.io/badge/currently-under%20development-brightgreen.svg)](https://github.com/m-lukas/InteractiveTPMap)

An interactive map with custom overlay, marker description and data table.

![full](https://i.imgur.com/tPdnJeY.jpg)

![selection](https://i.imgur.com/qpjgT82.jpg)
(*Notice: The pictures above don't share confidential business information.*)

## Description

This is my first HTML and Javascript project and was build for [Naturschutz-Tierpark Görlitz e.V.](http://www.tierpark-goerlitz.de/). It was first designed as digital archiving of all signs within the zoo. After I will have finished the project, i'm going to expand it as an "easy-to-create" interactive map for any usage.

#### To try this map:

1. Create a Google API Key and replace '<Google API Key>' (sign-map.html) ...
```html
<script src="https://maps.googleapis.com/maps/api/js?key= <Google API Key> "></script>
```
   For more information, see "[Get API Key](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en)"...
  
2. Go to [Firebase](https://firebase.google.com/)
3. Login with a Google account
4. `"GO TO CONSOLE"`
5. Create a new project
6. Create a Firebase Realtime Database
7. Change `"Rules"` to:

```c++
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
   For more information, see "[Firebase Documentation](https://firebase.google.com/docs/?authuser=0)"...   

8. Replace all required `<information>` (sign-map.html) 

```javascript
var config = {
				apiKey: "<Google API Key>",
				authDomain: "<Firebase Project Domain>",
				databaseURL: "<Firebase Database URL>",
				projectId: "<Firebase Project ID>",
				storageBucket: "",
				messagingSenderId: "<Firebase Messaging ID>"
};
```

9. Open the file `(sign-map.html)` and add your first marker

## Features
#### map
  - custom overlay-picture
  - adjustable zoom-level, center-position
#### marker
  - add one by clicking on the map
  - clickable (opens the info-window of this marker)
  - every marker has it's own settings and informations (icon, typ ...)
#### table
  - [DataTables API](https://datatables.net/)
    - sortable, clickable, searchable
  - click on dataset opens the info-window of the appropriated marker
  - contains the information of all markers
#### database
  - [Firebase Realtime Database](https://firebase.google.com/products/realtime-database/)
  
## Todo-List

- [ ] filter for markers
- [ ] styling with CSS
- [ ] different maps in one file
- [ ] add more comments
  
