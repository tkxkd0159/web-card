const letterClose = document.querySelector(".letter-close");
const letterOpen = document.querySelector(".letter-open");

function isMobile() {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    return true;
  }

  return false;
}

function close_state() {
  document.querySelector("#envelop").addEventListener("click", () => {
    if (letterClose.classList.contains("appear")) {
      letterClose.classList.remove("appear");
    }
    letterClose.classList.add("disappear");

    if (letterOpen.classList.contains("disappear")) {
      letterOpen.classList.remove("disappear");
    }
    letterOpen.style.display = "block";
    letterOpen.classList.add("appear");

    setTimeout(() => {
      if (letterClose.classList.contains("disappear")) {
        letterClose.style.display = "none";
      }
    }, 1001);
  });
}

function open_state() {
  document.querySelector(".tree").addEventListener("click", () => {
    letterClose.style.display = "block";
    if (letterClose.classList.contains("disappear")) {
      letterClose.classList.remove("disappear");
      letterClose.classList.add("appear");
    }

    if (letterOpen.classList.contains("appear")) {
      letterOpen.classList.remove("appear");
      letterOpen.classList.add("disappear");
    }
    setTimeout(() => {
      if (letterOpen.classList.contains("disappear")) {
        letterOpen.style.display = "none";
      }
    }, 1001);
  });
}

close_state();
open_state();
