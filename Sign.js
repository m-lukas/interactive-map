var Sign = function(name, bent, type, dirPath, changeDate, coordinats, color){
    this.name = name;
    this.bent = bent;
    this.type = type;
    this.dirPath = dirPath;
    this.coordinats = coordinats;
    this.color = color;
    
    this.getName = () => {
        return this.name;
    }
    this.setName = (value) => {
        this.name = value;
    }
    this.isBent = () => {
        return this.bent;
    }
    this.setBent = (value) => {
        this.bent = value;
    }
    this.getType = () => {
        return this.type;
    }
    this.setType = (value) => {
        this.type = value;
    }
    this.getPath = () => {
        return this.path;
    }
    this.setPath = (value) => {
        this.path = value;
    }
    this.getCoordinates = () => {
        return this.coordinats;
    }
    this.setCoordinates = (value) => {
        this.coordinats = value;
    }
    this.getColor = () => {
        return this.color;
    }
    this.setColor = (value) => {
        this.color = value;
    }
}