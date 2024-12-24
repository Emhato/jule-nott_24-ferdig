
console.log("test")

const targetDate1 = new Date('2024-12-24T16:00:00');

const targetDate2 = new Date('2024-12-25T04:00:00');

const targetDate3 = new Date('2024-12-25T16:00:00');

const targetDate4 = new Date('2024-12-26T04:00:00');

const targetDate5 = new Date('2024-12-26T16:00:00');

const targetDate6 = new Date('2024-12-27T04:00:00');

const targetDate7 = new Date('2024-12-27T16:00:00');

const targetDate8 = new Date('2024-12-28T04:00:00');

const targetDate9 = new Date('2024-12-28T16:00:00');

const targetDate10 = new Date('2024-12-29T04:00:00');

const targetDate11 = new Date('2024-12-29T16:00:00');

const targetDate12 = new Date('2024-12-30T04:00:00');

const targetDate13 = new Date('2024-12-30T16:00:00');

const targetDate14 = new Date('2024-12-31T04:00:00');



function checkTimeAndAddClass() { 
    const currentDate = new Date(); 

    if (currentDate >= targetDate1) { 

    const imagePrev = document.getElementById('image1'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image2');

    imageCurrent.classList.remove('hide');

    } 


    if (currentDate >= targetDate2) { 

    const imagePrev = document.getElementById('image2'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image3');

    imageCurrent.classList.remove('hide');

    } 

    
    if (currentDate >= targetDate3) { 

    const imagePrev = document.getElementById('image3'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image4');

    imageCurrent.classList.remove('hide');

    } 


    if (currentDate >= targetDate4) { 

    const imagePrev = document.getElementById('image4'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image5');

    imageCurrent.classList.remove('hide');

    } 


    if (currentDate >= targetDate5) { 

    const imagePrev = document.getElementById('image5'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image6');

    imageCurrent.classList.remove('hide');

    } 

    
    if (currentDate >= targetDate6) { 

    const imagePrev = document.getElementById('image6'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image7');

    imageCurrent.classList.remove('hide');

    } 


    if (currentDate >= targetDate7) { 

    const imagePrev = document.getElementById('image7'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image8');

    imageCurrent.classList.remove('hide');

    }


    if (currentDate >= targetDate8) { 

    const imagePrev = document.getElementById('image8'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image9');

    imageCurrent.classList.remove('hide');

    }

    
    if (currentDate >= targetDate9) { 

    const imagePrev = document.getElementById('image9'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image10');

    imageCurrent.classList.remove('hide');

    }


    if (currentDate >= targetDate10) { 

    const imagePrev = document.getElementById('image10'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image11');

    imageCurrent.classList.remove('hide');

    }


    if (currentDate >= targetDate11) { 

    const imagePrev = document.getElementById('image11'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image12');

    imageCurrent.classList.remove('hide');

    }

    
    if (currentDate >= targetDate12) { 

    const imagePrev = document.getElementById('image12'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image13');

    imageCurrent.classList.remove('hide');

    }

    if (currentDate >= targetDate13) { 

    const imagePrev = document.getElementById('image13'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image14');

    imageCurrent.classList.remove('hide');

    }

    if (currentDate >= targetDate14) { 

    const imagePrev = document.getElementById('image14'); 

    imagePrev.classList.add('hide'); 

    const imageCurrent = document.getElementById('image15');

    imageCurrent.classList.remove('hide');

    } 

} 


checkTimeAndAddClass(); 

setInterval(checkTimeAndAddClass, 60000)


console.log("check")