var intervalID = window.setInterval(setTime, 1000);

function setTime() {
  let today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  // makers sure that there is always 2 digits for every variable
  if (h.toString().length === 1) {
    h = `0${h}`;
  }
  if (m.toString().length === 1) {
    m = `0${m}`;
  }
  if (s.toString().length === 1) {
    s = `0${s}`;
  }

  let time = `${h}${m}${s}`;

  document.getElementsByTagName("h1")[0].innerText = `#${time}`;
  document.body.style.backgroundColor = `#${time}`;

  document.getElementsByTagName("h2")[0].innerText = `${h}:${m}:${s}`;
}
