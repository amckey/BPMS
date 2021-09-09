import Almacraft470View1 from '../assets/Almarcraft470View1.jpg';
import Almacraft470View2 from '../assets/Almarcraft470View2.jpg';
import Alm590View1 from '../assets/alm590-1.jpg';
import Alm590View2 from '../assets/alm590-2.jpg';
import Alm590View3 from '../assets/alm590-3.jpg';
import Alm590View4 from '../assets/alm590-4.jpg';
import Alm590View5 from '../assets/alm590-5.jpg';
import Alm590View6 from '../assets/alm590-6.jpg';
import Alm590Cab from '../assets/Almarcraft590cab.jpg';
import Targa4 from '../assets/targa4.jpg';
import Targa5 from '../assets/targa5.jpg';
import Targa6 from '../assets/targa6.jpg';
import Targa7 from '../assets/targa7.jpg';
import Targa8 from '../assets/targa8.jpg';
import Targa9 from '../assets/targa9.JPG';
import Targa10 from '../assets/targa10.jpg';
import Targa11 from '../assets/targa11.jpg';
import TargaMain from '../assets/targaMain.jpeg';
import Avatar from '../assets/avatar.svg';
import BoatVideo from '../assets/videoplayback.mp4';
import i18n from 'i18next';

export const readyModels = [
    {   main: {
            title: 'almarcraft590',
            desc: 'almarcraft590',
            metal: 'Aluminium',
            motor: '50-115 hp',
            fuelTank: 'by request',
            picture: Alm590View4,
            short_link: 'almarcraft590',
            length: '5,92',
            width: '2,22',
            passengers: '6',
            engine: '50-115 hp',
            selfDraining: 'yes',
            hull: 'EN-AW 5754/5083',
            seats: 'by request',
            raillings: 'Aluminium',
            deck: 'Aluminium',
            transom: '4',
            inboard: '4',
            totalLength: '5,92',
            weight: '680',
            capacity: '840',
            approval: 'CE/C',
            construction: 'yes',
            seatBoxes: 'Aluminium',
            steeringConsole: 'Aluminium',
            flotation: 'Airtank 4pcs',
            windshield: 'policarbonat monolit',
            bottom: '5',
            side: '4',
            active: false,
            available: true
        },
        equipment: {
            storageUnits: 'yes',
            steering: 'yes',
            pump: 'yes',
            lights: 'yes',
            hook: 'yes',
            bracket: 'yes',
            socket: 'yes',
            fireExtinguisher: 'yes',
            temperedGlass: 'yes',
            platform: 'yes',
            outlet: 'yes',
            ladder: 'by request',
            hullPainting: 'yes',
            active: false
        },
        accessories: {
            active: false,
            content: null
        },
        additional: 'almarcraft590',
        pictures: [Alm590View1, Alm590View2, Alm590View4, Alm590View5, Alm590View3, Alm590View6],
        video: BoatVideo,
        certification: true
    },
     {   main: {
            title: 'almarcraft590targa',
            desc: 'almarcraft590targa',
            metal: 'Aluminium',
            motor: '50-115 hp',
            fuelTank: 'by request',
            picture: TargaMain,
            short_link: 'almarcraft590targa',
            length: '5,92',
            width: '2,22',
            passengers: '6',
            engine: '50-115 hp',
            selfDraining: 'yes',
            hull: 'EN-AW 5754/5083',
            seats: 'by request',
            raillings: 'Aluminium',
            deck: 'Aluminium',
            transom: '10',
            inboard: '4',
            totalLength: '5,92',
            weight: '680',
            capacity: '840',
            approval: 'CE/C',
            construction: 'yes',
            seatBoxes: 'Aluminium',
            steeringConsole: 'Aluminium',
            flotation: 'Airtank 4pcs',
            windshield: 'policarbonat monolit',
            bottom: '5',
            side: '4',
            active: false,
            available: true
        },
        equipment: {
            storageUnits: 'yes',
            steering: 'yes',
            pump: 'yes',
            lights: 'yes',
            hook: 'yes',
            bracket: 'yes',
            socket: 'yes',
            fireExtinguisher: 'yes',
            temperedGlass: 'yes',
            platform: 'yes',
            outlet: 'yes',
            ladder: 'by request',
            hullPainting: 'yes',
            active: false
        },
        accessories: {
            targa: 'yes',
            active: false,
            content: true
        },
        additional: 'almarcraft590targa',
        pictures: [Targa4, Targa5, Targa6, Targa7, Targa8, Targa9, Targa10, Targa11],
        video: null,
        certification: true
    }
]

export const futureModels = [
    {   main: {
            title: 'almarcraft470',
            desc: 'almarcraft470',
            metal: 'Aluminium',
            motor: '30-60 hp',
            fuelTank: 'by request',
            picture: Almacraft470View1,
            short_link: 'almarcraft470',
            length: '4,70',
            width: '1,90',
            engine: '30-60 hp',
            selfDraining: 'yes',
            hull: 'EN-AW 5754/5083',
            raillings: 'Aluminium',
            deck: 'Aluminium',
            transom: '10',
            inboard: '4',
            totalLength: '4,70',
            approval: 'CE/C/D',
            construction: 'yes',
            seatBoxes: 'Aluminium',
            steeringConsole: 'Aluminium',
            flotation: 'Airtank',
            windshield: 'policarbonat monolit',
            bottom: '4',
            side: '4',
            active: false,
            available: false
        },
        equipment: {
            storageUnits: 'yes',
            steering: 'yes',
            pump: 'yes',
            lights: 'yes',
            hook: 'yes',
            bracket: 'yes',
            fireExtinguisher: 'yes',
            temperedGlass: 'yes',
            platform: 'yes',
            outlet: 'yes',
            ladder: 'by request',
            hullPainting: 'yes',
            active: false
        },
        accessories: {
            active: false,
            content: null
        },
        additional: 'almarcraft470',
        pictures: [Almacraft470View1, Almacraft470View2],
        video: null,
        certification: true
    },
    {   main: {
            title: 'almarcraft590cab',
            metal: '-',
            motor: '-',
            fuelTank: '-',
            desc: 'almarcraft590cab',
            picture: Alm590Cab,
            short_link: 'almarcraft590cab',
            active: false,
            available: false
        },
        equipment: null,
        accessories: null,
        additional: null,
        pictures: [Alm590Cab],
        certification: false
    }

]

export const reviews = [
    {
        avatar: Avatar,
        name: 'Vlad Misko',
        info: 'Владелец лодки',
        title: 'Almarcraft 470',
        stars_count: 5,
        desc: 'Лодка для базы идеальная, отлично держит волну, устойчивая. Достаточно места для ящиков с рыбой.'
    },
    {
        avatar: Avatar,
        name: 'Jaakko Jätinvuori',
        info: 'Владелец лодки',
        title: 'Almarcraft 470',
        stars_count: 5,
        desc: 'Надёжная и крепкая лодка, Отличная качественная сварка, Лодка на долгие годы!'
    },
    {
        avatar: Avatar,
        name: 'Juhani Harjula',
        info: 'Владелец лодки',
        title: 'Almarcraft 470',
        stars_count: 5,
        desc: 'Отличное решение как рабочая лодка. Используем для перевозки людей с вещами с материка на острова.'
    }
]


