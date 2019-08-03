"use strict";

/* Hero */
document.querySelector('#hero .social-icons').innerHTML = createIcons( heroIcons );

/* Header Nav BAr */

/* About me */

/* My skills */
document.querySelector('#skills .softskills').innerHTML = progressBars( softSkills );
document.querySelector('#skills .hardskills').innerHTML = progressBars( hardSkills );

/* My resume */
document.querySelector('#resume .left-study .all-list').innerHTML = workEducation( education );
document.querySelector('#resume .right-work .all-list').innerHTML = workEducation( work );
/* Achievements */
document.querySelector('#achievements .container .row').innerHTML = muchTrophy( achievements );
/* My services */
document.querySelector('.allServices.row').innerHTML = createServices( services );
/* My portfolio */

/* Testimonials */

/* Latest Blog */
document.querySelector('#blog').innerHTML = wowBlog( blogEntry );

/* Get in touch */

/* Footer */