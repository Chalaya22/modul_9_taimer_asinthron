const day = document.querySelector(".date-day"); //день тижня
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");
const digitalClock = document.querySelector(".digital-clock");
const arrowSecunds = document.querySelector(".clock-seconds_arrow");
const arrowMinutes = document.querySelector(".clock-minutes_arrow");
const arrowHours = document.querySelector(".clock-hours_arrow");

//Повині з обьєктв date стягнути данні , які безпосередньо відповідають нашому поточному числу
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четверг",
  "Пятниця",
  "Субота",
];

// при роботі з датами ми завжди використовуєм setInterval!( якій складається з колбек функціі та часу затримки)
//таким чином данні завжди будуть актуальні для користувача. Тому огортаємо ним весь наш код
setInterval(() => {
  const currrentTime = new Date();
  // console.log(currrentTime); // Tue Aug 29 2023 22:28:32 GMT+0300 (Восточная Европа, летнее время)
  //ми це повині опрацювати за допомогою методів оьєкта date
  // Насам перед заздалегіть створимо масиви , які сформовані під нашу мову

  const currentDay = arrDay[currrentTime.getDay()]; // з нашого масиву ми дістаєм день по індексу, який буде повернений за допомогою getDay()
  const currentDate = currrentTime.getDate(); // по документаціі використовуємо цей метод на  обьєкті currrentTime
  const currentMonrh = namesOfMonth[currrentTime.getMonth()];
  const currentYear = currrentTime.getFullYear();
  const currentHours = currrentTime.getHours(); // створюємо значення для поточної години для digital-clock
  //// cюди треба помістити електроний годиник, який буде кожну секунду змінювати своєз начення
  const currentMinutes = currrentTime.getMinutes(); // поточне значення хвилин
  const currentSecond = currrentTime.getSeconds(); // поточне значення секунд

  const changeSeconds = (360 / 60) * currentSecond; //яке положення в градусах має мати секундна стрілка
  const changeMinutes = (360 / 60) * currentMinutes; //яке положення в градусах має мати хвилинна стрілка
  const changeHours =
    (360 / 12) * currentHours + (360 / 12 / 60) * currentMinutes;

  const formatTime = `${currentHours
    .toString()
    .padStart(2, "0")} : ${currentMinutes
    .toString()
    .padStart(2, "0")} : ${currentSecond.toString().padStart(2, "0")}`;
  // console.log(formatTime);

  // Ми зібрали всі значення і лишилося іх підставити в наші клітинкм
  day.textContent = currentDay;
  date.textContent = currentDate;
  month.textContent = currentMonrh;
  year.textContent = currentYear;
  digitalClock.textContent = `поточний час: ${formatTime}`;
  arrowSecunds.style.transform = `rotate(${changeSeconds}deg)`; //робимо щоб стрілка рухалась
  arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`; //робимо щоб стрілка рухалась
  arrowHours.style.transform = `rotate(${changeHours}deg)`; //робимо щоб стрілка рухалась
}, 1000);
