const clock = document.querySelector(".clock");

function makeClock() {
  const dDay = new Date("2022-12-25");
  const today = new Date();

  const gap = dDay - today;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const min = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0");
  const sec = String(Math.floor((gap / 1000) % 60)).padStart(2, "0");

  clock.innerText = `${day}일 ${hour}시간 ${min}분 ${sec}초`;
}

makeClock();
setInterval(makeClock, 1000);
