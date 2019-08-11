"use strict";

/* Hero */
document.querySelector('#hero .social-icons').innerHTML = createIcons( heroIcons );
/* Header Nav BAr */
window.addEventListener('scroll', updateHeader);
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
// document.querySelector('#portfolio').innerHTML = createPortfolio( portfolioWorks );
document.querySelector('#portfolio').innerHTML = createPortfolio( portfolioWorks );

document.querySelectorAll('#portfolio .sorting > .item').forEach( item => {
    item.addEventListener('click', (event)=>{
        const tag = event.target.innerText;

        if ( tag === 'All' ) {
            document.querySelectorAll('#portfolio .all-pictures .picture').forEach( item => {
                item.style.display = 'inline-block';
            });
        } else {
            // // is pradziu viska paslepiame
            // document.querySelectorAll('.gallery > .list > .item').forEach( item => {
            //     item.style.display = 'none';
            // });

            // // atgal parodome tik tuos kurie turi "tag" reiksme
            // document.querySelectorAll('.gallery > .list > .item').forEach( (item, index) => {
            //     if ( works[index].tags.indexOf(tag) !== -1 ) {
            //         item.style.display = 'inline-block';
            //     }
            // });

            // supaprastinimas
            document.querySelectorAll('#portfolio .all-pictures .picture').forEach( (item, index) => {
                // jei randa - parodo, jei ne - paslepia
                if ( portfolioWorks[index].tags.indexOf(tag) !== -1 ) {
                    item.style.display = 'inline-block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
})

/* Testimonials */
document.querySelector('#testimonials .col-12').innerHTML = generateTestimonials( testimonials );

document.querySelectorAll('.testimonials .fa').forEach( item => {
    item.addEventListener( 'click', changeTestimonial );
});

/* Latest Blog */
document.querySelector('#blog').innerHTML = wowBlog( blogEntry );

/* Get in touch */

/* Footer */