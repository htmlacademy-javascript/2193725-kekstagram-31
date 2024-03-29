import {getRandomInteger} from './util.js';

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

const Avatars = {
    MIN: 1,
    MAX: 6
};

const Comments = {
    MIN: 1,
    MAX: 30
};


let photos = [];
let comments = [];


//photo
const addPhoto = (id) => ({
    id: id,
    url: `photos/${id}.jpg`
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(Likes.MIN, Likes.MAX),
    comments: getAddComments(Comments.MIN, Comments.MAX),
});

const addPhotos = () => {
    for (let i = 1; i <= COUNT; i++) {
        photos.push(addPhoto(i));
    }
};



//comments
const addComment = (id) => ({
  id: id,
  avatar: `img/avatar/${getRandomNumber(Avatars.MIN, Avatars.MAX)}.svg`
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  names: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const addComments = () => {
  for (let i = 1; i <= MESSAGES; i++) {
      comments.push(addComment(i));
  }
};

export {Photos};
export {addComments};
