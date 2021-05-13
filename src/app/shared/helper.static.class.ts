export class Helper {

    static reIndexArray(unIndexedArray) {
	    let tempArray = [];
    	for(let i=0; i<unIndexedArray.length; i++) {
        	tempArray.push(unIndexedArray[i]);
    	}
    	return tempArray;
    }

    static getItemIDFromUrl() {
        const urlArray = window.location.pathname.split('/');
        return urlArray[urlArray.length-1];
    }

    static createGridArray(dataArray, colsPerRow) {

        let gridArray = [];
        let i = 0;
        let n = dataArray.length;
      
        while (i < n) {
            gridArray.push(dataArray.slice(i, i += colsPerRow));
        }

        return gridArray;

    }

    static getBase64ImageData($fileinputevent) {
        return new Promise((resolve, reject) => {
            let imgdata = null;
            const reader = new FileReader();
            reader.readAsBinaryString($fileinputevent.target.files[0]);
            
            reader.onload = (evt) => {
                resolve(`data:image/jpeg;base64,${btoa(<string>evt.target.result)}`);
            };
        });

    }

}