"use strict";

/* Hero */

// Current sentence being processed
var arrayKeyValue = 0;
// Character number of the current sentence being processed 
var arrayKeyValueIndex = 0;
// Holds the handle returned from setInterval
var _INTERVAL_VAL;
// Element that holds the text
var elementID = document.querySelector("#typewrite");
// Implements typing effect
function Type() { 
	var text =  thingsToType[arrayKeyValue].substring(0, arrayKeyValueIndex + 1);
	elementID.innerHTML = text;
	arrayKeyValueIndex++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === thingsToType[arrayKeyValue]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 2000);
	}
}
// Implements deleting effect
function Delete() {
	var text =  thingsToType[arrayKeyValue].substring(0, arrayKeyValueIndex - 1);
	elementID.innerHTML = text;
	arrayKeyValueIndex--;
    // If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);
		// If last sentence then display the first one, else move to the next
		if(arrayKeyValue == (thingsToType.length - 1))
			arrayKeyValue = 0;
		else
			arrayKeyValue++;
		arrayKeyValueIndex = 0;
		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 70);
		}, 1000);
	}
}
// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 70);



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

function uniqueWords( list2d, key='' ) {
    let dictionary = [];

    if ( !Array.isArray(list2d) ) {
        return dictionary;
    }

    list2d.forEach( list => {
        if ( Array.isArray(list) ) {
            list.forEach( word => {
                if ( typeof(word) === 'string' &&
                     dictionary.indexOf(word) === -1 ) {
                    dictionary.push( word );
                }
            });
        } else {
            if ( typeof(list) === 'object' &&
                 list !== null &&
                 typeof(key) === 'string' &&
                 list[key] !== undefined &&
                 Array.isArray( list[key] ) ) {
                list[key].forEach( word => {
                    if ( typeof(word) === 'string' &&
                         dictionary.indexOf(word) === -1 ) {
                        dictionary.push( word );
                    }
                });
            }
        }
    });

    return dictionary;
}

function createPortfolio( data ){
    let HTML = '',
        tagsHTML = '',
        workHTML = '';
    // let HTML = `<div class="col-12">
    //                 <h3> <span>My</span> Portfolio  </h3>
    //             </div>
    //             <div class="col-12">
    //                 <div class="sorting">
    //                     <div>All</div>
    //                     <div>Brand</div>
    //                     <div>Design</div>
    //                     <div>Video</div>
    //                     <div>Photo</div>
    //                 </div>
    //             </div>
    //             <div class="all-pictures col-12">`;

    uniqueWords(data, 'tags').forEach( tag => {
        tagsHTML += `<div class="item">
                        ${tag}
                    </div>`;
    });

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
    
        workHTML += `<div class="picture " style="background-image: url(/img/portfolio/${data[i].background});">
                        <div class="content hiddden">
                            <div class="texts">
                                <div class="title">${data[i].title}</div>
                                <div class="tags">${data[i].tags.join(', ')}</div>
                                <div class="icons">
                                    <a href="#" class="zmdi zmdi-link"></a>
                                    <a href="#" class="zmdi zmdi-gps-dot"></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
    }
    HTML += `<div class="col-12">
                <h3> <span>My</span> Portfolio  </h3>
            </div>
            <div class="col-12">
                <div class="sorting">
                    <div class="item active">All</div>
                    ${tagsHTML}
                </div>
            </div>
            <div class="all-pictures col-12">
                ${workHTML}
            </div>`;

    // HTML = `<div class="sorting">
    //             <div class="item active">All</div>
    //             ${tagsHTML}
    //         </div>
    //         <div class="all-pictures col-12">
    //             ${workHTML}
    //         </div>`;

    return HTML;  
}

/* Testimonials */

function generateTestimonials( data ) {
    let listHTML = '',
        cloneData = [];

    // klonuojame duomenis
    data.forEach( item => {
        cloneData.push(item);
    } );

    cloneData.push( cloneData[0] );
    cloneData.unshift( cloneData[2] );
                    
    cloneData.forEach( testimonial => {
        listHTML += `<div class="item" style="width: calc(100% / ${cloneData.length});">
                        <h4>${testimonial.title}</h4>
                        <div class="stars">
                            ${generateStars(testimonial.stars)}
                        </div>
                        <p>${testimonial.content}</p>
                        <h5>${testimonial.author}</h5>
                        <h6>${testimonial.profesion}</h6>
                    </div>`;
    });

    return `<div class="testimonials">
                <div class="list" style="width: ${cloneData.length}00%;">${listHTML}</div>
                <div class="navigation">
                    <i class="fa fa-arrow-left"></i>
                    <div class="full-bar">
                        <div class="bar" style="width: calc(100% / ${cloneData.length - 2}); margin-left: calc(100% / ${cloneData.length - 2});"></div>
                    </div>
                    <i class="fa fa-arrow-right"></i>
                </div>
            </div>`;
}

function generateStars( count=5, limit=5 ) {
    let HTML = '';

    if ( limit < 1 ) {
        limit = 5;
    }
    if ( count < 1 ||
         count > limit ) {
        count = limit;
    }

    for ( let i=0; i<count; i++ ) {
        HTML += '<i class="fa fa-star"></i>';
    }
    
    if ( count < limit ) {
        for ( let i=0; i<limit-count; i++ ) {
            HTML += '<i class="fa fa-star-o"></i>';
        }
    }

    return HTML;
}

function changeTestimonial( event ) {
    let classList = event.target.classList,
        direction = 1,
        list = document.querySelector('#testimonials .list'),
        item = document.querySelector('#testimonials .list .item'),
        bar = document.querySelector('.testimonials > .navigation > .full-bar > .bar'),
        kadrai = 0,
        maxKadru = 25,
        time = 1000,
        zingsnisPx = 0;

    if ( classList.contains('fa-arrow-left') ) {
        direction = -1;
    }

    if ( animationInProgress === false ) {
        visibleTestimonial += direction;
        
        if ( visibleTestimonial >= testimonials.length ) {
            visibleTestimonial = 0;
        }
        if ( visibleTestimonial < 0 ) {
            visibleTestimonial = testimonials.length - 1;
        }
        
        animationInProgress = true;
        console.log('pradedu...');
        
        let clock = setInterval( () => {
            kadrai++;
            
            // prasideda logika del testimonial judinimo sonu
            zingsnisPx = parseFloat(getComputedStyle( item ).width) / maxKadru;
            
            list.style.marginLeft = parseFloat( getComputedStyle(list).marginLeft ) - direction * zingsnisPx + 'px';

            
            // o cia logika baigiasi

            if ( kadrai >= maxKadru ) {
                animationInProgress = false;
                
                if( visibleTestimonial === 0 ) {
                    list.style.marginLeft = -parseFloat( getComputedStyle(item).width ) + 'px';
                }
                
                if( visibleTestimonial === testimonials.length - 1 ) {
                    list.style.marginLeft = -parseFloat( getComputedStyle(item).width ) * testimonials.length + 'px';
                }
                
                
                clearInterval( clock );
            }
        }, time / maxKadru );
    }

    console.log( `calc(100% / ${testimonials.length} * ${visibleTestimonial})` );
    
    bar.style.marginLeft = `calc(100% / ${testimonials.length} * ${visibleTestimonial})`;

    return;
}

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