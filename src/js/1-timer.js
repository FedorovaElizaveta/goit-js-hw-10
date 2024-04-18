import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date().getTime();

    if (userSelectedDate < currentDate) {
      iziToast.error({ message: 'Please choose a date in the future' });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function handleTimer() {
  const interval = setInterval(() => {
    const currentDate = new Date().getTime();
    const timeLeft = userSelectedDate.getTime() - currentDate;

    if (timeLeft <= 0) {
      clearInterval(interval);
      iziToast.success({ message: 'Countdown finished!' });
      input.disabled = false;
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeLeft);
      updateTimerDisplay(days, hours, minutes, seconds);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  daysSpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);
}

startBtn.addEventListener('click', () => {
  const selectedDate = new Date(userSelectedDate).getTime();
  handleTimer(selectedDate);

  startBtn.disabled = true;
  input.disabled = true;
});
