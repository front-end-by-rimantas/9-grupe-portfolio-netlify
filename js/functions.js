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

function updateHeader() {
    const headerVisibleHeight = Math.floor(window.innerHeight * 0.5);
    const header = document.getElementById('hdr');
    if ( window.scrollY >= headerVisibleHeight ) {
        header.classList.add('fixed');
        document.getElementById("logotipas").src = "img/logo2.png";
    } else {
        header.classList.remove('fixed');
        document.getElementById("logotipas").src = "img/logo.png";
    }
    return;
}

var onScrollHandler = function() {
    var newImageUrl = yourImageElement.src;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
       newImageUrl = "img1.jpg"
    }
    yourImageElement.src = newImageUrl;
  };
  object.addEventListener ("scroll", onScrollHandler);
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
                        <div class="loading">
                        <span>${data[i].value}</span>   
                        </div> 
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
function muchTrophy( data ){
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
        typeof( data[i].icon ) !== 'string' ||
        typeof( data[i].number ) !== 'string' ||
        typeof( data[i].trophy ) !== 'string' ||
        data[i].icon === '' ||
        data[i].number.lenght === 0 ||
        data[i].trophy.length === 0 ) {
            continue;
        }
    
    HTML += `<div class=" one-ach col-3 col-md-6 col-micro-12">
                <div class="fa fa-${data[i].icon}"></div>
                <p class="count">${data[i].number}</p>
                <p class="text">${data[i].trophy}</p>
            </div>`
    }
    return HTML;
}

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
function createPortfolio( data ){
    let HTML = `<div class="col-12">
                    <h3> <span>My</span> Portfolio  </h3>
                </div>
                <div class="col-12">
                    <div class="sorting">
                        <div>All</div>
                        <div>Brand</div>
                        <div>Design</div>
                        <div>Video</div>
                        <div>Photo</div>
                    </div>
                </div>
                <div class="all-pictures col-12">`;

    if ( !Array.isArray(data) ) {
        console.error('Wrong data type. Has to be an array.');
        return HTML;
    }
    if ( data.length === 0 ){
        console.error('Wrong data size. Non-empty array needed.');
        return HTML;
    }

    for ( let i=0; i<7; i++ ){
        if ( 
            typeof( data[i].background ) !== 'string' ||
            typeof( data[i].title ) !== 'string' ||
            data[i].background === '' ||
            data[i].title.length === 0 ){
            continue;
        }
    
        HTML += `<div class="picture " style="background-image: url(/img/portfolio/${data[i].background}.jpg);">
                    <div class="content hiddden">
                        <div class="title">${data[i].title}</div>
                        <div class="icons">
                            <a href="#" class="zmdi zmdi-link"></a>
                            <a href="#" class="zmdi zmdi-gps-dot"></a>
                        </div>
                    </div>
                </div>`;
    }
    HTML += `</div>`
    return HTML;  
}

/* Testimonials */

/* Latest Blog */
function wowBlog( data ){
    let HTML = `<div class="col-12">
                    <h3> <span>Latest</span> blog </h3> 
                </div>`;
    
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
        typeof( data[i].img ) !== 'string' ||
        typeof( data[i].a ) !== 'string' ||
        typeof( data[i].h5 ) !== 'string' || 
        typeof( data[i].p ) !== 'string' ||
        typeof( data[i].portrait ) !== 'string' ||
        typeof( data[i].name ) !== 'string' ||
        typeof( data[i].date ) !== 'string' ||
        data[i].img === '' ||
        data[i].a.length === 0 ||
        data[i].h5.length === 0 ||
        data[i].p === '' ||
        data[i].portrait.length === 0 ||
        data[i].name === '' ||
        data[i].date.length === 0 ) {
            continue;
        }
    
    HTML += `<div class="col-4 col-sm-12">
                <div class="picture">
                    <img src="/img/blog/${data[i].img}" alt="foto">
                    <a href="#">${data[i].a}</a>
                </div>
                <div class="texts col-12">
                    <a href="#">
                        <h5>${data[i].h5}</h5>
                    </a>
                    <p>${data[i].p}</p>
                    <div class="author">
                        <div class="portrait">
                            <img src="/img/blog/${data[i].portrait}" alt="face">
                        </div>
                        <div class="name">${data[i].name}</div>
                        <div class="date">${data[i].date}</div>
                    </div>
                </div>
            </div>`
    }
    return HTML;
}


/* Get in touch */

/* Footer */