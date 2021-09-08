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
            title: 'Almarcraft 590',
            desc: 'Наша модель алюминиевой лодки для рыбалки и спорта - идеальный выбор для рыболовов с друзьями и семьями, которые хотят насладиться не только рыбалкой, но и заняться водными видами спорта или покататься на лыжах.',
            metal: 'Алюминий',
            motor: '50-115 hp',
            fuelTank: 'По запросу',
            picture: Alm590View4,
            short_link: 'almarcraft590',
            length: '5,92',
            width: '2,22',
            passengers: '6',
            engine: '50-115 hp',
            selfDraining: 'Да',
            hull: 'EN-AW 5754/5083',
            seats: 'По запросу',
            raillings: 'Алюминий',
            deck: 'Алюминий',
            transom: '4',
            inboard: '4мм',
            totalLength: '5,92',
            weight: '680кг',
            capacity: '840кг',
            approval: 'CE/C',
            construction: 'Да',
            seatBoxes: 'Алюминий',
            steeringConsole: 'Алюминий',
            flotation: 'Airtank 4pcs',
            windshield: 'Поликарбонатный монолит',
            bottom: '5мм',
            side: '4мм',
            active: false,
            available: true
        },
        equipment: {
            storageUnits: i18n.t('Да'),
            steering: 'Да',
            pump: 'Да',
            lights: 'Да',
            hook: 'Да',
            bracket: 'Да',
            socket: 'Да',
            fireExtinguisher: 'Да',
            temperedGlass: 'Да',
            platform: 'Да',
            outlet: 'Да',
            ladder: 'По запросу',
            hullPainting: 'Да',
            active: false
        },
        accessories: {
            active: false,
            content: null
        },
        additional: 'По желанию заказчика устанавливается двигатель (компоненты для двигателя можно заказать самостоятельно или отправить заказчику) и необходимые компоненты (крепление дроссельной заслонки, ключ запуска, тахометр, индикатор наклона)',
        pictures: [Alm590View1, Alm590View2, Alm590View4, Alm590View5, Alm590View3, Alm590View6],
        video: BoatVideo,
        certification: true
    },
     {   main: {
            title: 'Almarcraft 590 с таргой',
            desc: 'Оснащение, отделка и детали делают каждую лодку Almarcraft уникальной, но прочный корпус остается неизменным. Сферы применения многочисленны, и мы производим не только прогулочные и рыбацкие лодки, но и лодки профессионального использования.',
            metal: 'Алюминий',
            motor: '50-115 hp',
            fuelTank: 'По запросу',
            picture: TargaMain,
            short_link: 'almarcraft590targa',
            length: '5,92',
            width: '2,22',
            passengers: '6',
            engine: '50-115 hp',
            selfDraining: 'Да',
            hull: 'EN-AW 5754/5083',
            seats: 'По запросу',
            raillings: 'Алюминий',
            deck: 'Алюминий',
            transom: '10',
            inboard: '4мм',
            totalLength: '5,92',
            weight: '680кг',
            capacity: '840кг',
            approval: 'CE/C',
            construction: 'Да',
            seatBoxes: 'Алюминий',
            steeringConsole: 'Алюминий',
            flotation: 'Airtank 4pcs',
            windshield: 'Поликарбонатный монолит',
            bottom: '5мм',
            side: '4мм',
            active: false,
            available: true
        },
        equipment: {
            storageUnits: i18n.t('yes'),
            steering: 'Да',
            pump: 'Да',
            lights: 'Да',
            hook: 'Да',
            bracket: 'Да',
            socket: 'Да',
            fireExtinguisher: 'Да',
            temperedGlass: 'Да',
            platform: 'Да',
            outlet: 'Да',
            ladder: 'По запросу',
            hullPainting: 'Да',
            active: false
        },
        accessories: {
            targa: 'Да',
            active: false,
            content: true
        },
        additional: 'По желанию заказчика устанавливается двигатель (компоненты для двигателя можно заказать самостоятельно или отправить заказчику) и необходимые компоненты (крепление дроссельной заслонки, ключ запуска, тахометр, индикатор наклона)',
        pictures: [Targa4, Targa5, Targa6, Targa7, Targa8, Targa9, Targa10, Targa11],
        video: null,
        certification: true
    }
]

export const futureModels = [
    {   main: {
            title: 'Almarcraft 470',
            desc: 'Лодка Almarcraft 470 отлично подойдёт как для рыбалки, так и для семейного отдыха. Можно использовать не только на открытой воде, но и во внутренних водах. В данный момент проходит процесс сертификации.',
            metal: 'Алюминий',
            motor: '30-60 hp',
            fuelTank: 'По запросу',
            picture: Almacraft470View1,
            short_link: 'almarcraft470',
            length: '4,70',
            width: '1,90',
            engine: '30-60 hp',
            selfDraining: 'Да',
            hull: 'EN-AW 5754/5083',
            raillings: 'Алюминий',
            deck: 'Алюминий',
            transom: '10',
            inboard: '4мм',
            totalLength: '4,70',
            approval: 'CE/C/D',
            construction: 'Да',
            seatBoxes: 'Алюминий',
            steeringConsole: 'Алюминий',
            flotation: 'Airtank',
            windshield: 'Поликарбонатный монолит',
            bottom: '4мм',
            side: '4мм',
            active: false,
            available: false
        },
        equipment: {
            storageUnits: i18n.t('Да'),
            steering: 'Да',
            pump: 'Да',
            lights: 'Да',
            hook: 'Да',
            bracket: 'Да',
            fireExtinguisher: 'Да',
            temperedGlass: 'Да',
            platform: 'Да',
            outlet: 'Да',
            ladder: 'По запросу',
            hullPainting: 'Да',
            active: false
        },
        accessories: {
            active: false,
            content: null
        },
        additional: 'По желанию заказчика устанавливается двигатель (компоненты для двигателя можно заказать самостоятельно или отправить заказчику) и необходимые компоненты (крепление дроссельной заслонки, ключ запуска, тахометр, индикатор наклона)',
        pictures: [Almacraft470View1, Almacraft470View2],
        video: null,
        certification: true
    },
    {   main: {
            title: 'Almarcraft 590 с кабиной',
            metal: '-',
            motor: '-',
            fuelTank: '-',
            desc: 'Модель Almarcraft 590 с кабиной может использоваться не только для отдыха и рыбалки, но и как рабочая лодка. Устойчива к суровым погодным условиям Скандинавии.',
            picture: Alm590Cab,
            short_link: 'almarcraft590cab',
            active: false,
            available: false
        },
        equipment: null,
        accessories: null,
        additional: 'По желанию заказчика устанавливается двигатель (компоненты для двигателя можно заказать самостоятельно или отправить заказчику) и необходимые компоненты (крепление дроссельной заслонки, ключ запуска, тахометр, индикатор наклона)',
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


