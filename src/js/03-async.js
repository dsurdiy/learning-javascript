// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500),
  );
}

async function aMakeSmoothie() {
  try {
    console.time('aMakeSmoothie');

    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const berry = getFruit('strawberry');

    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);

    console.timeEnd('aMakeSmoothie');

    return fruits;
  } catch (error) {
    console.log('Ошибка');
  }
}

aMakeSmoothie().then(fruits => console.log(fruits));

// async function foo() {}

// const x = async function () {};

// const fn = async () => {};

// const r = {
//   async getName() {},
// };

// class X {
//   async getHero() {}
// }
