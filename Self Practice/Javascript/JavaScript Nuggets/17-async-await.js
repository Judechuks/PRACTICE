// async / await 
// async: must be present, always return a promise
// await: wait till promise is settled
// error handling: try/catch block

// Example 1: using async / await
const example = async () => {
  return 'Hello There!'
}

async function someFunc(){
  const result = await example();
  console.log(result);
}
someFunc();

// Example 2: using then/catch to get results
const users = [
  {id: 1, name: 'john'},
  {id: 2, name: 'susan'},
  {id: 3, name: 'anna'},
];

const articles = [
  {userId: 1, articles: ['one', 'two', 'three']},
  {userId: 2, articles: ['four', 'five']},
  {userId: 3, articles: ['six', 'seven', 'eight', 'nine']},
];

function getUser(name){
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name)

    if (user) {
      return resolve(user)
    } else {
      reject(`No such user with name: "${name}"`)
    }
  });
}

function getArticles(userId){
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId)

    if (userArticles) {
      return resolve(userArticles.articles)
    } else {
      reject(`Wrong ID`)
    }
  });
}

getUser('anna')
  .then((user) => getArticles(user.id))
    .then((articles) => console.log(articles))
    .catch(err => console.log(err))
  .catch(err => console.log(err))
;

// Example 3: using async / await (better & faster version of example 2)
const getData = async () => {
  const user = await getUser('susan');
  if (user) {
    const userArticles = await getArticles(user.id)
    console.log(userArticles);
  }
}
getData();

// Example 4: using try/catch block to handle error (better version of example 3)
const getResult = async () => {
  try {
    const user = await getUser('john');
    const userArticles = await getArticles(user.id)
    console.log(userArticles);
  } catch (error) {
    console.log(error);
  }
}
getResult();