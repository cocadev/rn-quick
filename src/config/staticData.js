import { Dimensions } from 'react-native';

export const PAQUETES = [
    {
        name: 'VIP',
        content: [
            'Logotipo visible',
            'Número de visitas',
            'Calificación del Cliente',
            'Comentarios visibles',
            'Gráficas de Análisis',
            'Notificaciones extras',
            'Mensajes',
            'Calificación de clientes',
            'Descuentos por temporada',
            'Recomendaciones'
        ],
        price: '500.00',
        note: 'Mensuales',
        color: '#FCD306'
    },
    {
        name: 'Premium',
        content: [
            'Logotipo visible',
            'Número de visitas',
            'Calificación del Cliente',
            'Comentarios visibles',
            'Gráficas de Análisis',
            'Notificaciones extras',
            'Mensajes'
        ],
        price: '200.00',
        note: 'Mensuales',
        color: '#A7CE38'

    },
    {
        name: 'Básico',
        content: [
            'Logotipo visible',
            'Número de visitas',
            'Calificación del Cliente',
            'Comentarios visibles'
        ],
        price: '100.00',
        note: 'Mensuales',
        color: '#F26D06'

    }
]

export const AYUDA = {
    title: 'Esta sección es para que nos contactes si tienes algún problema con:',
    content: [
        'Pagos', 'Vigencias', 'Reclamar posicionamiento de un negocio usado por alguien más'
    ],
    contacto: 'quickb@gmail.com'
}

export const REGISTRAR = {
    title: 'Bienvenido a',
    description1: 'Esta opción es para escoger tu negocio de nuestra base de datos para que puedas usarlo en nuestra app',
    description2: 'En caso de ya estar en uso y no ser de usted contáctenos en ayuda'
}


export const RESULTADOS = [
    {
        avatar: 'https://dailytimes.com.pk/assets/uploads/2018/11/21/howcuttingdo.jpg',
        name: 'Garufa',
        address: 'Jardín Juárez, 135, Centro',
        title: 'Restaurante',
    },
    {
        avatar: 'https://images-na.ssl-images-amazon.com/images/I/41q5iK0d9cL.jpg',
        name: 'Joaquim',
        address: 'Jardín Juárez, 135, Centro',
        title: 'Restaurante',
    },
]

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.004;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const MAPREGION = {
    latitude: 19.432608,
    longitude: -99.133209,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
}

export const REGISTER_CATEGORIA = [
    'Restaurantes',
    'Shopping',
    'Viajes',
    'Talleres',
    'Mercados',
    'Deportes'
]

export const MISComentarios = [{
    title: 'Viajes',
    img: '',
    content: [{
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png',
        name: 'Garufa',
        address: 'Excelente servicio, limpio, la comida deliciosa',
    },
    {
        img: 'https://www.freepnglogos.com/uploads/eagle-png-logo/morehead-state-eagle-png-logo-8.png',
        name: 'Tierra Roja',
        address: 'Las bebidas no estaban frías, pero el servicio y la comida muy ricas, nos encantó el servicio',
        phone: '01 492 924 29 10',
        rating: 15
    }]
},
{
    title: 'Restaurantes',
    img: '',
    content: [{
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png',
        name: 'Garufa',
        address: 'Excelente servicio, limpio, la comida deliciosa',
    },
    {
        img: 'https://www.freepnglogos.com/uploads/eagle-png-logo/morehead-state-eagle-png-logo-8.png',
        name: 'Tierra Roja',
        address: 'Las bebidas no estaban frías, pero el servicio y la comida muy ricas, nos encantó el servicio',
        phone: '01 492 924 29 10',
        rating: 15
    }]
}

]