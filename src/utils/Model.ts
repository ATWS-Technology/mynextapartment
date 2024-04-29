import {ImageRequireSource, ImageSourcePropType} from 'react-native';
import {Source} from 'react-native-fast-image';

export interface Product {
  title: string;
  subtitle: string;
  color1: string;
  color2: string;
  picture: number;
}

export const products = [
  {
    title: 'Get food from Bukateria',
    subtitle: 'Conveniently order from small food vendors near you.',
    color1: '#FDD89E',
    color2: '#FEEFD8',
    picture: require('../src/assets/images/onboard_local_food.png'),
    aspectRatio: 1,
  },

  {
    title: 'Customize your food order',
    subtitle: 'Create your own food combinations to order.',
    color1: '#F1BBB3',
    color2: '#FADFDB',
    picture: require('../src/assets/images/onboard_customize.png'),
    aspectRatio: 1,
  },
  {
    title: 'Bulk orders',
    subtitle: 'Order large quantity of food in one go.',
    color1: '#EB8DAD',
    color2: '#F7D1DE',
    picture: require('../src/assets/images/onboard_bulk.png'),
    aspectRatio: 1,
  },
];

export const DATA = [
  {
    id: 1,
    title: 'Modern JS: A curated collection',
  },
  {
    id: 2,
    title: 'JavaScript notes for professionals',
  },
  {
    id: 3,
    title: 'JavaScript: The Good Parts',
  },
  {
    id: 4,
    title: 'JavaScript: The right way',
  },
  {
    id: 5,
    title: 'Exploring ES6',
  },
  {
    id: 6,
    title: 'JavaScript Enlightenment',
  },
  {
    id: 7,
    title: 'You dont know JS',
  },
  {
    id: 8,
    title: 'Learn JavaScript',
  },
  {
    id: 9,
    title: 'JavaScript succintly',
  },
  {
    id: 10,
    title: 'Human JavaScript',
  },
  {
    id: 11,
    title: 'JavaScript design patterns',
  },
  {
    id: 12,
    title: 'JS50: 50 illustrations in JS',
  },
  {
    id: 13,
    title: 'Eloqent JavaScript',
  },
  {
    id: 14,
    title: 'Practical ES6',
  },
  {
    id: 15,
    title: 'Speaking JavaScript',
  },
];

export const PENDING_ORDERS = [
  {
    id: '#2364795KB',
    status: 'Awaiting',
    vendor: 'Mr Ben’s Restaurant',
    amount: 5800,
    type: 'pending',
  },
  {
    id: '#4364795KB',
    status: 'Awaiting',
    vendor: 'Mr Ben’s Restaurant',
    amount: 2000,
    type: 'pending',
  },
  {
    id: '#3364795KB',
    status: 'Awaiting',
    vendor: 'Mr Ben’s Restaurant',
    amount: 4200,
    type: 'pending',
  },
  {
    id: '#1364795KB',
    status: 'Failed',
    vendor: 'Mr Ben’s Restaurant',
    amount: 580,
    type: 'pending',
  },
  {
    id: '#6364795KB',
    status: 'In-transit',
    vendor: 'Mr Ben’s Restaurant',
    amount: 10200,
    type: 'pending',
  },
  {
    id: '#7364795KB',
    status: 'Awaiting',
    vendor: 'Mr Ben’s Restaurant',
    amount: 5800,
    type: 'pending',
  },
  {
    id: '#9364795KB',
    status: 'Awaiting',
    vendor: 'Mr Ben’s Restaurant',
    amount: 2000,
    type: 'pending',
  },
  {
    id: '#0364795KB',
    status: 'Awaiting',
    vendor: 'Mr Ben’s Restaurant',
    amount: 4200,
    type: 'pending',
  },
  {
    id: '#5364795KB',
    status: 'Failed',
    vendor: 'Mr Ben’s Restaurant',
    amount: 580,
    type: 'pending',
  },
  {
    id: '#8364795KB',
    status: 'In-transit',
    vendor: 'Mr Ben’s Restaurant',
    amount: 10200,
    type: 'pending',
  },
];

export const DELIVERED_ORDERS = [
  {
    id: '#1364795KB',
    status: '',
    vendor: 'Mr Ben’s Restaurant',
    amount: 2000,
    type: 'delivered',
  },
  {
    id: '#2364795KB',
    status: '',
    vendor: 'Mr Ben’s Restaurant',
    amount: 5800,
    title: 'delivered',
  },
  {
    id: '#3364795KB',
    status: '',
    vendor: 'Mr Ben’s Restaurant',
    amount: 1200,
    title: 'delivered',
  },
  {
    id: '#4364795KB',
    status: '',
    vendor: 'Mr Ben’s Restaurant',
    amount: 9000,
    title: 'delivered',
  },
  {
    id: '#5364795KB',
    status: '',
    vendor: 'Mr Ben’s Restaurant',
    amount: 800,
    title: 'delivered',
  },
];

export const ORDERS_FILTER_ARRAY = ['Newest', 'Oldest', 'A - Z', 'Z - A'];

export const CATEGORIES = [
  {
    id: '1',
    name: 'Swallow',
    image: require('../src/assets/icons/cat_swallow.png'),
  },
  {
    id: '2',
    name: 'Rice',
    image: require('../src/assets/icons/cat_rice.png'),
  },
  {
    id: '4',
    name: 'Soup',
    image: require('../src/assets/icons/cat_soup.png'),
  },
  {
    id: '3',
    name: 'Drinks',
    image: require('../src/assets/icons/cat_drink.png'),
  },
];

export const RESTAURANTS = [
  {
    id: '1',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Surulere',
    deliveryFee: 'Free delivery',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/ofada.png'),
  },
  {
    id: '2',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Yaba',
    deliveryFee: '500',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/efo.png'),
  },
  {
    id: '3',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Ikeja',
    deliveryFee: 'Free delivery',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/egusi.png'),
  },
  {
    id: '4',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Ojuelegba',
    deliveryFee: '350',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/ofada.png'),
  },
  {
    id: '5',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Maryland',
    deliveryFee: '200',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/rice.png'),
  },
];

export const ALL_RESTAURANTS = [
  {
    id: '3',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Ikeja',
    deliveryFee: 'Free delivery',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/egusi.png'),
  },
  {
    id: '5',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Maryland',
    deliveryFee: '200',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/rice.png'),
  },
  {
    id: '4',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Ojuelegba',
    deliveryFee: '350',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/ofada.png'),
  },
  {
    id: '1',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Surulere',
    deliveryFee: 'Free delivery',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/ofada.png'),
  },
  {
    id: '2',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Yaba',
    deliveryFee: '500',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/efo.png'),
  },
  {
    id: '6',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Ikeja',
    deliveryFee: 'Free delivery',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/egusi.png'),
  },
  {
    id: '7',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Maryland',
    deliveryFee: '200',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/rice.png'),
  },
  {
    id: '8',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Ojuelegba',
    deliveryFee: '350',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/ofada.png'),
  },
  {
    id: '9',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Surulere',
    deliveryFee: 'Free delivery',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/ofada.png'),
  },
  {
    id: '10',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Yaba',
    deliveryFee: '500',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/efo.png'),
  },
];

export const TRENDING_RESTAURANTS = [
  {
    id: '3',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Ikeja',
    deliveryFee: 'Free delivery',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/egusi.png'),
  },
  {
    id: '5',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Maryland',
    deliveryFee: '200',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/rice.png'),
  },
  {
    id: '4',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Ojuelegba',
    deliveryFee: '350',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/ofada.png'),
  },
  {
    id: '1',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Surulere',
    deliveryFee: 'Free delivery',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/ofada.png'),
  },
  {
    id: '2',
    vendor: 'Mr Ben’s Restaurant',
    location: 'Yaba',
    deliveryFee: '500',
    rate: '4.5',
    numOfRate: '300',
    duration: '30 - 40',
    openTime: '10:00',
    image: require('../src/assets/images/efo.png'),
  },
];

export const VENDOR_CATEGORIES = [
  {
    id: '0',
    name: 'All',
  },
  {
    id: '1',
    name: 'Swallow',
  },
  {
    id: '2',
    name: 'Rice',
  },
  {
    id: '4',
    name: 'Soup',
  },
  {
    id: '3',
    name: 'Drinks',
  },
  {
    id: '5',
    name: 'Pasta',
  },
];

export const LOCATIONS = [
  {
    id: '0',
    name: 'Yaba',
  },
  {
    id: '1',
    name: 'Surulere',
  },
  {
    id: '2',
    name: 'Akoka',
  },
  {
    id: '4',
    name: 'Somolu',
  },
  {
    id: '3',
    name: 'Onipanu',
  },
  {
    id: '5',
    name: 'Mushin',
  },
  {
    id: '6',
    name: 'Yaba',
  },
  {
    id: '7',
    name: 'Surulere',
  },
  {
    id: '8',
    name: 'Akoka',
  },
  {
    id: '9',
    name: 'Somolu',
  },
  {
    id: '10',
    name: 'Onipanu',
  },
  {
    id: '11',
    name: 'Mushin',
  },
];

export const FOOD_ITEMS = [
  {
    id: '0',
    name: 'Amala',
    amount: 300,
    image: require('../src/assets/images/amala.png'),
  },
  {
    id: '1',
    name: 'Eba/Garri',
    amount: 200,
    image: require('../src/assets/images/eba.png'),
  },
  {
    id: '2',
    name: 'Iyan',
    amount: 400,
    image: require('../src/assets/images/iyan.png'),
  },
  {
    id: '4',
    name: 'Fufu',
    amount: 200,
    image: require('../src/assets/images/fufu.png'),
  },
  {
    id: '3',
    name: 'Semo',
    amount: 300,
    image: require('../src/assets/images/semo.png'),
  },
  {
    id: '5',
    name: 'Lafun',
    amount: 200,
    image: require('../src/assets/images/efo.png'),
  },
  {
    id: '6',
    name: 'Amala',
    amount: 300,
    image: require('../src/assets/images/amala.png'),
  },
  {
    id: '7',
    name: 'Eba/Garri',
    amount: 200,
    image: require('../src/assets/images/eba.png'),
  },
  {
    id: '8',
    name: 'Iyan',
    amount: 400,
    image: require('../src/assets/images/iyan.png'),
  },
  {
    id: '9',
    name: 'Fufu',
    amount: 200,
    image: require('../src/assets/images/fufu.png'),
  },
  {
    id: '10',
    name: 'Semo',
    amount: 300,
    image: require('../src/assets/images/semo.png'),
  },
  {
    id: '11',
    name: 'Lafun',
    amount: 200,
    image: require('../src/assets/images/efo.png'),
  },
];

export const SMALL_FOOD_ITEMS = [
  {
    id: '0',
    name: 'Amala',
    amount: 300,
    image: require('../src/assets/images/amala.png'),
  },
  {
    id: '1',
    name: 'Eba/Garri',
    amount: 200,
    image: require('../src/assets/images/eba.png'),
  },
  {
    id: '2',
    name: 'Iyan',
    amount: 400,
    image: require('../src/assets/images/iyan.png'),
  },
  {
    id: '4',
    name: 'Fufu',
    amount: 200,
    image: require('../src/assets/images/fufu.png'),
  },
];

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  isPhoneVerified: boolean;
  addresses: string;
  token: string;
}

export interface Vendor {
  id: string;
  vendor: string;
  location: string;
  deliveryFee: string;
  rate: string;
  numOfRate: string;
  duration: string;
  openTime: string;
  image:
    | Source
    | ImageRequireSource
    | ImageSourcePropType
    | AnimatedNode<ImageSourcePropType | undefined>;
}
export interface VendorCategory {
  id: string;
  name: string;
}
export interface HomeCategory {
  id: string;
  name: string;
  image: Source | ImageRequireSource | ImageSourcePropType | undefined;
}

export type VendorRoutes = {
  Home: undefined;
  AllRestaurants: undefined;
  Vendor: {vendor: Vendor};
  Tray: undefined;
  OrderSummary: undefined;
  Checkout: undefined;
  TrackOrder: undefined;
  DeliveryAddress: undefined;
  PaymentStatus: undefined;
  CompletionFeedback: undefined;
};

export const track_order_status = [
  {
    id: 1,
    title: 'Order in progress',
    time: '17:05',
  },
  {
    id: 2,
    title: 'Rider has picked order',
    time: '17:05',
  },
  {
    id: 3,
    title: 'Order has arrived',
    time: '17:05',
  },
];

export const ORDERS = [
  {
    id: 1,
    price: 1800,
    items: [
      {
        id: '0',
        name: 'Amala',
        amount: 300,
        image: require('../src/assets/images/amala.png'),
      },
      {
        id: '1',
        name: 'Eba/Garri',
        amount: 200,
        image: require('../src/assets/images/eba.png'),
      },
      {
        id: '2',
        name: 'Iyan',
        amount: 400,
        image: require('../src/assets/images/iyan.png'),
      },
      {
        id: '4',
        name: 'Fufu',
        amount: 200,
        image: require('../src/assets/images/fufu.png'),
      },
    ],
  },
  {
    id: 2,
    price: 3500,
    items: [
      {
        id: '0',
        name: 'Amala',
        amount: 300,
        image: require('../src/assets/images/amala.png'),
      },
      {
        id: '1',
        name: 'Eba/Garri',
        amount: 200,
        image: require('../src/assets/images/eba.png'),
      },
      {
        id: '2',
        name: 'Iyan',
        amount: 400,
        image: require('../src/assets/images/iyan.png'),
      },
      {
        id: '4',
        name: 'Fufu',
        amount: 200,
        image: require('../src/assets/images/fufu.png'),
      },
    ],
  },
  {
    id: 3,
    price: 2200,
    items: [
      {
        id: '0',
        name: 'Amala',
        amount: 300,
        image: require('../src/assets/images/amala.png'),
      },
      {
        id: '1',
        name: 'Eba/Garri',
        amount: 200,
        image: require('../src/assets/images/eba.png'),
      },
      {
        id: '2',
        name: 'Iyan',
        amount: 400,
        image: require('../src/assets/images/iyan.png'),
      },
      {
        id: '4',
        name: 'Fufu',
        amount: 200,
        image: require('../src/assets/images/fufu.png'),
      },
    ],
  },
];

export const RECENT_TRANSACTIONS = [
  {
    title: 'DECEMBER, 2022',
    data: [
      {
        id: 1,
        title: 'Wallet top up',
        date: '21 Jan',
        time: '17:05',
        amount: 5000,
      },
      {
        id: 2,
        title: 'Refund for order #5364795KB ',
        date: '17 Sept',
        time: '17:05',
        amount: 3500,
      },
    ],
  },
  {
    title: 'JANUARY, 2023',
    data: [
      {
        id: 1,
        title: 'Wallet top up',
        date: '21 Jan',
        time: '05:09',
        amount: 5050,
      },
      {
        id: 2,
        title: 'Refund for order #5364795KB ',
        date: '17 Sept',
        time: '17:05',
        amount: 2000,
      },
    ],
  },
  {
    title: 'DECEMBER, 2022',
    data: [
      {
        id: 1,
        title: 'Wallet top up',
        date: '21 Jan',
        time: '17:05',
        amount: 5000,
      },
      {
        id: 2,
        title: 'Refund for order #5364795KB ',
        date: '17 Sept',
        time: '17:05',
        amount: 3500,
      },
    ],
  },
  {
    title: 'JANUARY, 2023',
    data: [
      {
        id: 1,
        title: 'Wallet top up',
        date: '21 Jan',
        time: '05:09',
        amount: 5050,
      },
      {
        id: 2,
        title: 'Refund for order #5364795KB ',
        date: '17 Sept',
        time: '17:05',
        amount: 2000,
      },
    ],
  },
];

export const PAYMENT_METHODS = [
  {
    id: 1,
    title: 'Pay with Wallet',
  },
  {
    id: 2,
    title: 'Pay with Bank Transfer',
  },
  {
    id: 3,
    title: 'Pay with Card - Paystack',
  },
];
