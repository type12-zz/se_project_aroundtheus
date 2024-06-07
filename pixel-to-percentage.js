function convertPixelsToPercentage(pixelValue=200, containerWidth=1440) {
    let percentage = (pixelValue / containerWidth) * 100 ;
    parseInt(percentage)
    console.log(percentage);
    
    return percentage
}

alert( `This program helps you to convert pixels into percentages.
In order to use this converter you must know the pixels you
 want to convert as well as the container/parent width in pixels.
Ex: 
    pixel value = 32
    container_width = 1440
`);

let pixelValue = parseInt(prompt("Enter the pixel value: "));
let containerWidth = parseInt(prompt("Enter the container/parent width: "));


convertPixelsToPercentage(pixelValue, containerWidth);

