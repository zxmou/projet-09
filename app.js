//ceci est le premier exo

const tableau = [1, 2, 3, 4, 5, 6, 7, 8,];

const lesnombrepairs = tableau.filter(function(nombrepairs)  {
  return nombrepairs % 2 === 0;
});

const nombreelement = lesnombrepairs.length;

const sum = lesnombrepairs.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const average = sum / nombreelement;

console.log("les nombres pairs sont : " + lesnombrepairs);
console.log("le nombre d'éléments pairs est : " + nombreelement);
console.log("la moyenne des nombres pairs est : " + average);

//ceci est le deuxiéme exo

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  return words.reduce((longestWord, currentWord) => {
    if (currentWord.length > longestWord.length) {
      return currentWord;
    } else {
      return longestWord;
    }
  });
}

const wordArray = ["code213", "banana", "apple", "devlopement-web", "magnifique"];
const longestWord = findLongestWord(wordArray);
console.log("Longest word:", longestWord); 

//ceci est mon troisiéme exo

function calculateAveragePages(books) {
  if (books.length === 0) {
    return 0;
  }

  const totalPages = books.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
  const averagePages = totalPages / books.length;
  
  return averagePages;
}

const booksArray = [
  { title: "livre 1", author: "Auteur 1", pages: 360 },
  { title: "livre 2", author: "Auteur 2", pages: 400 },
  { title: "livre 3", author: "Auteur 3", pages: 640 }
];

const averagePages = calculateAveragePages(booksArray);
console.log("Average number of pages:", averagePages);

//ceci est mon quatriéme exo

function calculededonner(strings) {
  return strings.reduce((frequenceObj, str) => {
    frequenceObj[str] = (frequenceObj[str] || 0) + 1;
    return frequenceObj;
  }, {});
}

const entrer = ["hakim", "chafi9", "hakim"];
const frequenceObject = calculededonner(entrer);
console.log(frequenceObject); 

//ceci est le cinquiéme exo

function countPeopleByCity(people) {
  return people.reduce((cityCount, person) => {
    const city = person.city;
    cityCount[city] = (cityCount[city] || 0) + 1;
    return cityCount;
  }, {});
}

const donnerpersonne = [
  { name: "meriam", age: 30, city: "alger centre" },
  { name: "hakim", age: 40, city: "Béjaïa" },
  { name: "mohamad", age: 50, city: "alger centre" }
];

const cityCounts = countPeopleByCity(donnerpersonne);
console.log(cityCounts); 

