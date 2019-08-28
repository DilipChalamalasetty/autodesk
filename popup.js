window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}
function lightbox_open1() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light1').style.display = 'block';
  document.getElementById('fade1').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close1() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light1').style.display = 'none';
  document.getElementById('fade1').style.display = 'none';
  lightBoxVideo.pause();
}