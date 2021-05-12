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
            ]
        }
    }
);