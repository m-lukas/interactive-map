var Sign = function(id, name, bent, type, dirPath, changeDate, coordinats, color){
    this.id = id;
    this.name = name;
    this.bent = bent;
    this.type = type;
    this.dirPath = dirPath;
    this.coordinats = coordinats;
    this.color = color;
    
    this.getID = () => {
        return this.id;
    }
    this.getName = () => {
        return this.name;
    }
    this.setName = (value) => {
        this.name = value;
        //update marker by id
    }
    this.isBent = () => {
        return this.bent;
    }
    this.setBent = (value) => {
        this.bent = value;
        //update marker by id
    }
    this.getType = () => {
        return this.type;
    }
    this.setType = (value) => {
        this.type = value;
        //update marker by id
    }
    this.getPath = () => {
        return this.path;
    }
    this.setPath = (value) => {
        this.path = value;
        //update marker by id
    }
    this.getCoordinates = () => {
        return this.coordinats;
    }
    this.setCoordinates = (value) => {
        this.coordinats = value;
        //update marker by id
    }
    this.getColor = () => {
        return this.color;
    }
    this.setColor = (value) => {
        this.color = value;
        //update marker by id
    }

    //colors: strongyellow, lightyellow, purple, lightpurple, green, lightgreen, black, lightblue, magenta, darkgrey, blue, red, pink, brown, grey, orange,lightbrown, white
    this.getIcon = () => {
        switch(this.color){
            case 'strongyellow':
                markerIcon_='Marker/marker_strongyellow.png';
                break;
            case 'lightyellow':
                markerIcon_='Marker/marker_lightyellow.png';
                break;
            case 'purple':
                markerIcon_='Marker/marker_purple.png';
                break;
            case 'lightpurple':
                markerIcon_='Marker/marker_lightpurple.png';
                break;
            case 'green':
                markerIcon_='Marker/marker_green.png';
                break;
            case 'lightgreen':
                markerIcon_='Marker/marker_lightgreen.png';
                break;
            case 'black':
                markerIcon_='Marker/marker_black.png';
                break;
            case 'lightblue':
                markerIcon_='Marker/marker_lightblue.png';
                break;
            case 'magenta':
                markerIcon_='Marker/marker_magenta.png';
                break;
            case 'darkgrey':
                markerIcon_='Marker/marker_darkgrey.png';
                break;
            case 'blue':
                markerIcon_='Marker/marker_blue.png';
                break;
            case 'red':
                markerIcon_='Marker/marker_red.png';
                break;
            case 'pink':
                markerIcon_='Marker/marker_pink.png';
                break;
            case 'brown':
                markerIcon_='Marker/marker_brown.png';
                break;               
            case 'grey':
                markerIcon_='Marker/marker_grey.png';
                break;
            case 'orange':
                markerIcon_='Marker/marker_orange.png';
                break;
            case 'lightbrown':
                markerIcon_='Marker/marker_lightbrown.png';
                break;
            default:
                markerIcon_='Marker/marker_white.png';
                break;        
        }
    }
}

function loadSigns(){
    //id, name, bent, type, dirPath, changeDate, coordinats, color
    var signRef = database.ref("signs");
	signRef.orderByValue().on("value", function(snapshot) {
		snapshot.forEach(function(data) {
            var name = data.val().name;
            var bent = data.val().gebogen;
            var type = data.val().typ;
            var dirPath = data.val().save;
            var changeDate = data.val().date;
            var coordinats = {lat: data.val().lat, lng: data.val().lng};
            var color;
            switch(type){
                case 'B1 - Service- und Informationsschild (A3 quer)':
                    color='strongyellow';
                    break;
                case 'B2 - Service- und Informationsschild (A3 hoch)':
                    color='lightyellow';
                    break;
                case 'B3 - Service- und Informationsschild (A4 quer)':
                    color='purple';
                    break;
                case 'B4 - Service- und Informationsschild (A4 hoch)':
                    color='lightpurple';
                    break;
                case 'B5 - Service- und Informationsschild (A5 quer)':
                    color='green';
                    break;
                case 'B6 - Service- und Informationsschild (A5 hoch)':
                    color='lightgreen';
                    break;
                case 'B7 - Uebersichtstafel/Lageplan':
                    color='black';
                    break;
                case 'B8 - Informationen zu spez. Patenschaften':
                    color='lightblue';
                    break;
                case 'B10 - Themenschilder':
                    color='magenta';
                    break;
                case 'B11 - Rundgangsschild (Pfeilform)':
                    color='darkgrey';
                    break;
                case 'B12 - Werbung/Plakat':
                    color='blue';
                    break;
                case 'S1 - Sachschild (Tier/Pflanze/Objekte)':
                    color='red';
                    break;
                case 'S2 - Sachschilder (klein)':
                    color='pink';
                    break;
                case 'P1 - Sondertafel/Spiele':
                    color='brown';
                    break;               
                case 'W - Wegweiser':
                    color='grey';
                    break;
                case 'U - ungenormtes Schild':
                    color='orange';
                    break;
                case 'U/P1 - ungenormte Sondertafel':
                    color='lightbrown';
                    break;
                default:
                    color='unknown';
                    break;        
            }
			
			var id = data.key;
			if(IDs.contains(id)){
                id = Math.max.apply(null, IDs)+1;
            }
            IDs.push(id);
            
            var sign = new Sign(id, name, bent, type, dirPath, changeDate, coordinats, color);

			//placeMarkerFromDatabase(id, data.val().name, data.val().date, data.val().gebogen, category, data.val().save, {lat: data.val().lat, lng: data.val().lng}, markerIcon_);
		});
	});

}