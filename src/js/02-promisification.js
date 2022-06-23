/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Вот ваш заказ: ${dish}`);
//       }

//       reject('❌ Упс, у нас закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */
const makeOrder = (dish, onSuccess, onError) => {
  const passed = Math.random() > 0.5;

  if (passed) {
    onSuccess(`✅ Вот ваш заказ: ${dish}`);
  }

  onError('❌ Упс, у нас закончились продукты');
};

function onMakeOrderSuccess(result) {
  console.log(result);
}

function onMakeOrderError(error) {
  console.log(error);
}
