"use strict";

/* Hero */
const thingsToType = [    
    "Such developer",
    "very UI/UX",
    "Much amazing",
    "super inovative" 
    ];
const blogEntry = [
    {
        img: '1.jpg',
        a: 'UX/UI',
        h5: 'Light trails on highway',
        p: 'Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.',
        portrait: 'f1.jpg',
        name: 'Tomas Katerpiliariauskas',
        date: '03 August 2018'
    },
    {
        img: '2.jpg',
        a: 'interface',
        h5: 'Good stuff and other',
        p: 'Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.',
        portrait: 'f2.jpg',
        name: 'Hans Diershvangelberg',
        date: '12 June 2019'
    },
    {
        img: '3.jpg',
        a: 'solutions',
        h5: 'Potato the god savior',
        p: 'Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.',
        portrait: 'f3.jpg',
        name: 'Antanina Karmazinaitiene',
        date: '24 December 2010'
    },
    
]
const heroIcons = [
    {
        icon: 'facebook',
        link: '#'
    },
    {
        icon: 'twitter',
        link: '#'
    },
    {
        icon: 'behance',
        link: '#'
    },
    {
        icon: 'instagram',
        link: '#'
    },
    {
        icon: 'dribbble',
        link: '#'
    },
];

/* Header Nav BAr */

/* About me */

/* My skills */
const softSkills = [
    {
        title: 'Web Design',
        value: '53%'
    },
    {
        title: 'UI/UX',
        value: '14%'
    },
    {
        title: 'Eating',
        value: '100%'
    },
    {
        title: 'Sleeping',
        value: '86%'
    }
]

const hardSkills = [
    {
        title: 'Typing',
        value: '16%'
    },
    {
        title: 'Potating',
        value: '59%'
    },
    {
        title: 'Running',
        value: '41%'
    },
    {
        title: 'Gaming',
        value: '99%'
    }
]

/* My resume */

const education = [
    {
        year: 'Jan 2004 - Dec 2006',
        course: 'cooursourLists of  United Statessok',
        school: 'Lists of schools in the United States'
    },
    {
        year: 'Jan 2004 - Dec 2006',
        course: 'cooursourLists of  United Statessok',
        school: 'VGTu Lists of schools in the United States'
    },
    {
        year: 'Jan 2004 - Dec 2006',
        course: 'uber oursourscourse',
        school: 'Lists of schools in the United '
    }
]

const work = [
    {
        year: 'Jan 2004 - Dec 2006',
        course: 'cooursourLists of  United Statessok',
        school: 'keLists of schools in the United '
    },
    {
        year: 'Jan 2004 - Dec 2006',
        course: 'mcdonLists of schoted States winner',
        school: 'mcdrivLists of in the Statesrse'
    },
    {
        year: 'Jan 2004 - Dec 2006',
        course: 'uber couroursseLists ofted States',
        school: 'VLists of schoolUnited Statessoursa'
    }
]

/* Achievements */

const achievements = [
    {
        icon:'heart',
        number:'738',
        trophy:'Happy clients'
    },
    {
        icon:'check-square',
        number:'102',
        trophy:'Successful Projects'
    },
    {
        icon:'trophy',
        number:'06',
        trophy:'Awards Received'
    },
    {
        icon:'coffee',
        number:'511',
        trophy:'Cups of tea'
    },
]

/* My services */
const services = [
    {
        icon:'flower-alt',
        service:'Branding',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem ea aliquid? Iste, molestias esse.',
    },
    {
        icon:'devices',
        service:'web design',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem ea aliquid? Iste, molestias esse.',
    },
    {
        icon:'shopping-basket',
        service:'Marketing',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem ea aliquid? Iste, molestias esse.',
    },
    {
        icon:'code-setting',
        service:'Marketing',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem ea aliquid? Iste, molestias esse.',
    },
    {
        icon:'collection-item',
        service:'Friendly to all Screens',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem ea aliquid? Iste, molestias esse.',
    },
    {
        icon:'compass',
        service:'Unlimited support',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem ea aliquid? Iste, molestias esse.',
    }
];

/* My portfolio */
const portfolioWorks = [
    {
        background:'3.jpg',
        title: 'Web Developement',
        tags: ['html', 'css', ]
    },
    {
        background:'2.jpg',
        title: 'High End',
        tags: ['css', 'advanced', 'js']
    },
    {
        background:'1.jpg',
        title: 'very Internet',
        tags: ['html',  'js']
    },
    {
        background:'4.jpg',
        title: 'such AWEsome',
        tags: ['css', 'advanced']
    },
    {
        background:'5.jpg',
        title: 'Much wow',
        tags: ['html', 'css',]
    },
    {
        background:'6.jpg',
        title: 'mega Inovative',
        tags: ['html', 'css', 'js']
    },
    {
        background:'7.jpg',
        title: 'Gucci extraordinare',
        tags: ['advanced', 'js']
    },
    {
        background:'8.jpg',
        title: 'a lot bueno',
        tags: ['html','advanced', 'js']
    },
];

/* Testimonials */

let visibleTestimonial = 1;
let animationInProgress = false;
const testimonials = [
    {   
        title : 'awesome work',
        author: 'Ahmed',
        stars: 5,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio assumenda tenetur quaerat tempora necessitatibus.',
        profesion: 'web developer'
    },
    {
        title : 'awesome work',
        author: 'Sara',
        stars: 1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio assumenda tenetur quaerat tempora necessitatibus.',
        profesion: 'web developer'
    },
    {
        title : 'awesome work',
        author: 'Karim',
        stars: 3,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio assumenda tenetur quaerat tempora necessitatibus.',
        profesion: 'web developer' 
    },
    {
        title : 'awesome work',
        author: 'Karim',
        stars: 4,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio assumenda tenetur quaerat tempora necessitatibus.',
        profesion: 'web developer' 
    },
    {
        title : 'awesome work',
        author: 'Karim',
        stars: 2,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio assumenda tenetur quaerat tempora necessitatibus.',
        profesion: 'web developer' 
    }
];

/* Latest Blog */

/* Get in touch */

/* Footer */