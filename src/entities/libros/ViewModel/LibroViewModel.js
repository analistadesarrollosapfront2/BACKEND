class LibroViewModel {
    
    libro_id;
    libro_name;
    libro_editorial;


    constructor(plibroid, plibroname, plibroeditorial, ){
        this.libro_id = plibroid;
        this.libro_name = plibroname;
        this.libro_editorial = plibroeditorial;
        
        return [
            this.libro_id,
            this.libro_editorial,
            
        ];
    }

}

module.exports = new LibroViewModel();
