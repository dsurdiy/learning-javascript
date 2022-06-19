import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// console.log('Лог до setInterval');
// setInterval(logger, 2000, 2000);
// console.log('Лог после setInterval');

/*
 * Очистка интервала с clearInterval(intervalId)
 */

const intervalId = setInterval(logger, 2000, 2000);

const shouldCancelInterval = Math.random() > 0.5;
console.log(shouldCancelInterval);

if (shouldCancelInterval) {
  clearInterval(intervalId);
}
