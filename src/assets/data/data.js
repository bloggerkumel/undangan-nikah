export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Roki',
            child: 'Putra ke 5',
            father: 'Tjong Kiat Oh',
            mother: '(Alm) Tjoa Cun Nio',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Nurhasanah',
            child: 'Putri ke 4',
            father: '(Alm) Nasan',
            mother: 'Nurjanah',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Juni',
            date: '22',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Juni',
            date: '22',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        address: 'Jl.Komp Kebersihan RT08/10 No.20A Tegal Alur Kalideres Jakarta Barat(11820).'
    },

    link: {
        calendar: 'https://calendar.app.google/kbqZXbj2YRZki3137',
        map: 'https://maps.app.goo.gl/AAidPnP5QQaQne7d9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Roki',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Nurhasanah',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbzaTM-4vRKWrtzGId_QwPXElvDOfNKgfDh-vnwzqLACjJnntKRGKKdRB-37pgvjBUjX4w/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
