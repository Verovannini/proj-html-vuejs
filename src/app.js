var app = new Vue(
    {
        el: '#root',
        data: {
            // Links List Header Menu
            linksHeader: [
                'Home',
                'About',
                'Departments',
                'Articles',
                'Make Appointment'
            ],
            activeLink: 0,

            // Links List Footer Menu
            linksFooter: [
                'Cardiology',
                'Pediatrics',
                'Diabetes Care',
                'Pre-natel Care',
                'Ultrasound Echocardiogram'
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