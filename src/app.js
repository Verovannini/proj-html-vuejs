var app = new Vue(
    {
        el: '#root',
        data: {
            // Links List Header Menu
            linksHeader: [
                {
                    name: 'Home',
                    link: '#'
                },
                {
                    name: 'About',
                    link: '#'
                },
                {
                    name: 'Departments',
                    link: '#'
                },
                {
                    name: 'Articles',
                    link: '#'
                },
                {
                    name: 'Make Appointment',
                    link: '#'
                }
            ],
            activeLink: 0,

            // Links List Footer Menu
            linksFooter: [
                {
                    name: 'Cardiology',
                    link: '#'
                },
                {
                    name: 'Pediatrics',
                    link: '#'
                },
                {
                    name: 'Diabetes Care',
                    link: '#'
                },
                {
                    name: 'Pre-natel Care',
                    link: '#'
                },
                {
                    name: 'Ultrasound Echocardiogram',
                    link: '#'
                }
            ],

            // Logo images paths
            logos: [
                "img/client-logos-1.png",
                "img/client-logos-2.png",
                "img/client-logos-3.png",
                "img/client-logos-4.png"
            ]
        },
        methods: {
            // Function that scroll at the top of the page
            toTop() {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
);