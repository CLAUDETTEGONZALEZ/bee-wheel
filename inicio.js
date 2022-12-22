function redirect() {
  setTimeout(function () {
    document.location.href =`${window.location.origin}/index.html`
  }, 3000);
}

const dist = document.querySelector('#bee');

document.querySelector('button').addEventListener('click', () => {
  dist.classList.remove('moveright');
  setTimeout(function () {
    dist.classList.add('moveright');
  }, 100);
});

var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 10;
    var id = setInterval(frame, 15);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        redirect();
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";

      }
    }
  }
}