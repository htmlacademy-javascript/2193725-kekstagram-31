const COUNT = 25;

const NAMES = [
  'Antonio',
  'Ruslan',
  'Alina',
  'Marusya',
  'Semen',
  'Eva',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Купание бегемотов?',
  'Долгожданный отдыхн море',
  '300км до моря',
  'Пляж из фильма',
  'Зацени мою камеру',
  'Улыбайся, нас скоро съедят',
  'Машина бетмена',
  'Завтрак модели подиума',
  'Освежающий напиток из винограда',
  'Мы спасены',
  'Прячем обувь',
  'Дорога к морю',
  'я и моя аудюха',
  'Наш перекус',
  'Котосуши',
  'Лёха астронавт',
  'Пролетая над..',
  'Хор',
  'Дедов раритет',
  'ноги из Том и Джерри',
  'Отель',
  'Полезный завтрак',
  'Романтики',
  'Краб',
  'Незабываемый концерт'
];

const Likes = {
    MIN: 15,
    MAX: 200
};

const avatars = {
    MIN: 1,
    MAX: 6
};

const

let photos = [];

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const addPhoto = (id) => ({
    id: id,
    url: 'photos/${id}.jpg'
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)]
    likes: getRandomInteger(Likes.MIN, Likes.MAX),
    comments: getaddComments()
});

const addPhotos = => {
    for (let i = 1; i <= COUNT; i++) {
        photos.push(addPhoto(i));
    }
};

let comments = [];

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const addComment = (id) => ({
  id: id,
  avatar: 'img/avatar/${id}.svg'
  message: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)]
  names: getRandomInteger(Names.MIN, Names.MAX),
});

const addComments = => {
  for (let i = 1; i <= COUNT; i++) {
      coments.push(addPhoto(i));
  }
};



addPhotos();
