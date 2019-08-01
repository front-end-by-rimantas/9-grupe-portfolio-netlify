"use strict";

/* Hero */
function createIcons( data ){
    let HTML = '';

    if ( !Array.isArray(data) ) {
        console.error('Wrong data type. Has to be an array.');
        return HTML;
    }
    if ( data.length === 0 ){
        console.error('Wrong data size. Non-empty array needed.');
        return HTML;
    }

    for ( let i=0; i<data.length; i++ ){
        if ( typeof( data[i].icon ) !== 'string' ||
            typeof( data[i].link ) !== 'string' ||
            data[i].icon === '' ||
            data[i].link.length === 0 ){
            continue;
        }
    
        HTML += `<a href="${data[i].link}" class="fa fa-${data[i].icon}"></a>`
    }
        
    return HTML;
    
}

/* Header Nav BAr */
function myFunction(x) {
    x.classList.toggle("change");
}

/* About me */

/* My skills */
function progressBars( data ){
    let HTML = '';
    
    if ( !Array.isArray(data) ) {
        console.error('Wrong data type. Has to be an array.');
        return HTML;
    }
    if ( data.length === 0 ){
        console.error('Wrong data size. Non-empty array needed.');
        return HTML;
    }
    for ( let i=0; i<data.length; i++ ){
        if ( typeof( data[i].title ) !== 'string' ||
        typeof( data[i].value ) !== 'string' ||
        data[i].title === '' ||
        data[i].value.length === 0 ){
            continue;
        }
    
    HTML += `<div class=" progress-bar">
                <div class="texts">
                    <div class="title">${data[i].title}</div>
                </div>
                <div class="bar">
                    <div class="value" style="width: ${data[i].value};">
                        <div class="loading"></div> 
                        <span>${data[i].value}</span>   
                    </div>
                </div>
            </div> `
    }
    return HTML;
}

/* My resume */
function workEducation( data ){
    let HTML = '';
    
    if ( !Array.isArray(data) ) {
        console.error('Wrong data type. Has to be an array.');
        return HTML;
    }
    if ( data.length === 0 ){
        console.error('Wrong data size. Non-empty array needed.');
        return HTML;
    }
    for ( let i=0; i<data.length; i++ ){
        if ( 
        typeof( data[i].year ) !== 'string' ||
        typeof( data[i].course ) !== 'string' ||
        typeof( data[i].school ) !== 'string' ||
        data[i].year === '' ||
        data[i].course.lenght === 0 ||
        data[i].school.length === 0 ) {
            continue;
        }
    
    HTML += `<div class="list">
                <p>${data[i].year}</p>
                <h5>${data[i].course}</h5>
                <h6>${data[i].school}</h6>
            </div>`
    }
    return HTML;
}

/* Achievements */

/* My services */
function createServices( data ){
    let HTML = '';  

    if ( !Array.isArray(data) ) {
        console.error('Wrong data type. Has to be an array.');
        return HTML;
    }
    if ( data.length === 0 ){
        console.error('Wrong data size. Non-empty array needed.');
        return HTML;
    }
    
    for ( let i=0; i<data.length; i++ ){
        if ( typeof( data[i].icon ) !== 'string' ||
            typeof( data[i].service ) !== 'string' ||
            typeof( data[i].description ) !== 'string' ||
            data[i].icon.length === 0 ||
            data[i].service.length === 0 ||
            data[i].description.length === 0 ){
            continue;
    }
        HTML += `<div class="aService col-4 col-md-6 col-xs-12">
                    <i class="zmdi zmdi-${data[i].icon}"></i>
                    <h4>${data[i].service}</h4>
                    <p>${data[i].description}</p>
                 </div>`
    }
    return HTML;
}

/* My portfolio */

/* Testimonials */

/* Latest Blog */

/* Get in touch */

/* Footer */