var Sign = function(id, name, bent, type, dirPath, changeDate, coordinats, color){
    this.id = id;
    this.name = name;
    this.bent = bent;
    this.type = type;
    this.dirPath = dirPath;
    this.changeDate = changeDate;
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
    this.getDate = () => {
        return this.changeDate;
    }
    this.setDate = (value) => {
        this.changeDate = value;
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
	signRef.orderByValue().once("value", function(snapshot) {
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
			if(main.IDs.contains(id)){
                id = Math.max.apply(null, main.IDs)+1;
            }
            main.IDs.push(id);
            
            var sign = new Sign(id, name, bent, type, dirPath, changeDate, coordinats, color);
            main.signs.push(sign);

            placeMarker(sign);
            //insertRow(sign);

		});
	});
}

function placeMarker(sign){
   		
    var marker = new google.maps.Marker({
        icon: sign.getIcon(),
        position: sign.getCoordinates(),
        map: main.map,
                
        id: '',
        name: '',
        date: '',
        bent: '',
        save: '',
        type: ''
    });
            
    marker.set('id', sign.getID());
    marker.set('name', sign.getName());
    marker.set('date', sign.getDate());
    marker.set('bent', sign.isBent());
    marker.set('typ', sign.getType());
    marker.set('save', sign.getPath());
    
    /*
    var idOfMarker = marker.get(id);
            
    var overviewwindow = new google.maps.InfoWindow({
        content: '<p><b><font size="4">Name: </font></b>' + marker.get('name') + '</p>' + '<p><b><font size="4">Aenderungsdatum: </font></b>' + marker.get('date') + '</p>' + '<p><b><font size="4">Eigenschaft: </font></b>' + marker.get('bent') + '</p>' + '<p><b><font size="4">Kategorie: </font></b>' + marker.get('typ') + '</p>' + '<p><b><font size="4">Speicherort: </font></b>' + marker.get('save') + '</p>' + '<button onclick="deleteData(clickedMarker)">Makierung und Eintrag löschen</button>',
        position: location
    });

    google.maps.event.addListener(marker, 'click', function() {
        overviewwindow.open(map);
        lastOverviewWindow = overviewwindow;
        clickedMarker = marker;
    } );
            
    signList.push(marker);
            
    var formatedBent = 'Nein';
            
    if (bent === 'Schild ist gebogen') {
        formatedBent = 'Ja';
    } else {
        formatedBent = 'Nein';
    }
            
    $(document).ready(function() {
        var t = $('#example').DataTable();	 
            t.row.add( [
                id,
                name,
                formatedBent,
                typ,
                save,
                date
            ] ).draw( false );
    } );
    */			
}