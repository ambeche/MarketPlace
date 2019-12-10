'use strict';
const ExifImage = require('exif').ExifImage;

const getCoordinatesAndDimension = (imgFile) => { 
  return new Promise((resolve, reject) => {
    try {
      new ExifImage({ image : imgFile },  (error, exifData) => {
        if(error){
            console.log('Error: '+error.message);
            resolve('no exif data found');
        }else{
            const dimension =[ exifData.exif.ExifImageHeight, exifData.exif.ExifImageWidth];// extracts height and width of image
            resolve(dimension); 
    }
    });
      
    }
    catch (error) {
      reject(error);
    }
  });
};

// convert GPS coordinates to decimal format
// for longitude, send exifData.gps.GPSLongitude, exifData.gps.GPSLongitudeRef
// for latitude, send exifData.gps.GPSLatitude, exifData.gps.GPSLatitudeRef
const gpsToDecimal = (gpsData, hem) => {
  let d = parseFloat(gpsData[0]) + parseFloat(gpsData[1] / 60) +
      parseFloat(gpsData[2] / 3600);
  return (hem === 'S' || hem === 'W') ? d *= -1 : d;
};

module.exports = {
  getCoordinatesAndDimension,
};