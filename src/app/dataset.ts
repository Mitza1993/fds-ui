 export const DATA_SET = {
    users: [
        {
            id: 0,
            email: 'iordache.mihaialexandru@yahoo.com',
            role: 'admin',
            password: '1234',
            firstName: 'Mihai',
            lastName: 'Iordache',
            displayName: 'Mihai Iordache',
            phone: '0742696912',
            address: 'Bucharest, Sector 3, Str.Elisabeta, nr. 2',
            authToken: 'ajzxkcnkjnzxca123'
        },
        {
            id: 1,
            email: 'employee1@yahoo.com',
            role: 'employee',
            password: '1234',
            firstName: 'Alexandru',
            lastName: 'Dumitru',
            displayName: 'Alexandru Dumitru',
            phone: '0742696912',
            address: 'Bucharest, Sector 3, Str.Elisabeta, nr. 2',
            experience: 'senior-barber',
            photo: '../assets/barber.jpg',
            level: 2,
            likes: 50,
            portofolio: [{
                id: 0,
                url: '../../assets/portofolio/example.jpg',
            },
            {
                id: 1,
                url: '../../assets/portofolio/example2.jpeg'
            },
            {
                id: 2,
                url: '../../assets/portofolio/example3.jpg'
            }],
            cancelations: 3,
            status: ['active','inactive', 'blocked'],
            blacklist:[
                1,2,3 //id client
            ]
        },
        {
            id: 2,
            email: 'employee2@yahoo.com',
            role: 'employee',
            password: '1234',
            firstName: 'George',
            lastName: 'Iulian',
            displayName: 'George Iulian',
            phone: '0742696912',
            address: 'Bucharest, Sector 3, Str.Elisabeta, nr. 2',
            experience: 'senior-barber',
            photo: '../assets/barber.jpg',
            level: 2,
            likes: 50,
            portofolio: [{
                id: 0,
                url: '../../assets/portofolio/example.jpg',
            },
            {
                id: 1,
                url: '../../assets/portofolio/example2.jpeg'
            },
            {
                id: 2,
                url: '../../assets/portofolio/example3.jpg'
            }],
            cancelations: 0,
            status: 'active/inactive',
            blacklist:[
                1,2,3
            ]
        },
        {
            id: 3,
            email: 'employee3@yahoo.com',
            role: 'employee',
            password: '1234',
            firstName: 'Vlad',
            lastName: 'Ionescu',
            displayName: 'Vlad Ionesc',
            phone: '074269212',
            address: 'Bucharest, Sector 3, Str.Elisabeta, nr. 2',
            experience: 'senior-barber',
            photo: '../assets/barber.jpg',
            level: 2,
            likes: 50,
            portofolio: [{
                id: 0,
                url: '../../assets/portofolio/example.jpg',
            },
            {
                id: 1,
                url: '../../assets/portofolio/example2.jpeg'
            },
            {
                id: 2,
                url: '../../assets/portofolio/example3.jpg'
            }],
            cancelations: 0,
            status: 'active/inactive',
            blacklist:[
                1,2,3
            ]
        },
        {
            id: 4,
            email: 'client@yahoo.com',
            role: 'client',
            password: '1234',
            firstName: 'Laurentiu',
            lastName: 'Istrate',
            displayName: 'Laurentiu Istrate',
            phone: '0742696912',
            address: 'Bucharest, Sector 3, Str.Elisabeta, nr. 2'
        },
        {
            id: 5,
            email: 'client2@yahoo.com',
            role: 'client',
            password: '1234',
            firstName: 'Andrei',
            lastName: 'Cosmescu',
            displayName: 'Andrei Cosmescu',
            phone: '0742696912',
            address: 'Bucharest, Sector 3, Str.Elisabeta, nr. 2'
        }
    ],
    appointments: [
        {
            id: 0,
            ownerId: 3, //angajat
            id_client: 4,
            description: 'Programare tuns + spalat',
            servicesIds: [
                6
            ],
            startDate: new Date(2017, 4, 22, 9, 30),
            endDate: new Date(2017, 4, 22, 10, 30),
            status: 'pending',// 'canceled', 'done'
            reason: ['anuntat', 'neanuntat']
        }
    ],
    services: [
        {
            id: 0,
            employee_id: 1,
            name: 'Tuns',
            price: 30,
            duration_interval: '30-60 minute'
        },
        {
            id: 1,
            employee_id: 1,
            name: 'Tuns barba',
            price: 7,
            duration_interval: '15-30 minute'
        },
        {
            id: 2,
            employee_id: 1,
            name: 'Tuns + spalat',
            price: 40,
            duration_interval: '40-1h 15 minute'
        },
        {
            id: 3,
            employee_id: 1,
            name: 'Tuns + spalat + barba',
            price: 45,
            duration_interval: '1h-1h20 minute'
        },
        {
            id: 4,
            employee_id: 2,
            name: 'Tuns',
            price: 35,
            duration_interval: '30-60 minute'
        },
        {
            id: 5,
            employee_id: 2,
            name: 'Tuns barba',
            price: 9,
            duration_interval: '15-30 minute'
        },
        {
            id: 6,
            employee_id: 3,
            name: 'Tuns + spalat',
            price: 60,
            duration_interval: '40-1h 15 minute'
        },
        {
            id: 7,
            employee_id: 3,
            name: 'Tuns + spalat + barba',
            price: 50,
            duration_interval: '1h-1h20 minute'
        }
    ]
}