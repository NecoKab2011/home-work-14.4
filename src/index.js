const btnAll = document.querySelector('.btn-all')
const btnRace = document.querySelector('.btn-race')

function delayedPromise(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), delay);
    });
  }

  function runAllPromises() {
    const promises = [
      delayedPromise('A', 1000),
      delayedPromise('B', 2000),
      delayedPromise('C', 1500),
      delayedPromise('D', 2500),
      delayedPromise('E', 500)
    ];

    Promise.all(promises)
      .then(results => {
        console.log('Усі проміси завершені:', results);
      })
      .catch(error => console.log(error));
  }

  function randomDelay(value) {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    return new Promise(resolve => {
      setTimeout(() => resolve(`${value}, ${delay} мс`), delay);
    });
  }

  function delayRace() {
    const promises = [
      randomDelay('1'),
      randomDelay('2'),
      randomDelay('3'),
      randomDelay('4'),
      randomDelay('5')
    ];

    Promise.race(promises)
      .then(result => {
        console.log('Найшвидший результат:', result);
      })
      .catch(error => console.log(error));
  }

  btnAll.addEventListener('click', runAllPromises);
  btnRace.addEventListener('click', delayRace);