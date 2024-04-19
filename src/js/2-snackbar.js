import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const fulfilledCheckbox = document.querySelector('input[value="fulfilled"]');
const rejectedCheckbox = document.querySelector('input[value="rejected"]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = form.elements.delay.value * 1000;

  if (fulfilledCheckbox.checked) {
    const promiseFulfilled = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          iziToast.success({
            message: `✅ Fulfilled promise in ${delay}ms`,
          })
        );
      }, delay);
    })
      .then(message => {
        console.log(message);
      })
      .catch(error => {
        console.error(error);
      });
  }

  if (rejectedCheckbox.checked) {
    const promiseRejected = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(
          iziToast.error({
            message: `❌ Rejected promise in ${delay}ms`,
          })
        );
      }, delay);
    })
      .then(message => {
        console.log(message);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
