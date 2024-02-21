//Функция для проверки длины строки

const testingStringLenght = (string = '', maxLenght = 1) => maxLenght >= string.length;

testingStringLenght('проверяемая строка', 20);
testingStringLenght('проверяемая строка', 18);
testingStringLenght('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом.

const readingPalindrome = (string) => {
  const normalizedString = string.replaceAll('','').toUpperCase();
  let emptyString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    emptyString += normalizedString(i);
  }

  return emptyString === normalizedString;
};

readingPalindrome('топот');
readingPalindrome('ДовОд');
readingPalindrome('Кекс');
readingPalindrome('Лёша на полке клопа нашёл ');
