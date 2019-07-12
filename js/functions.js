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

/* About me */

/* My skills */

/* My resume */

/* Achievements */

/* My services */

/* My portfolio */

/* Testimonials */

/* Latest Blog */

/* Get in touch */

/* Footer */