function changeimage(image, id) {
  document.getElementById(id).style.backgroundImage = "url(images/" + image + ".png)";
  blur();
}

function assignimages() {
  i = 1
  page = "parallax-" + i;
  while (document.getElementById(page)) {
    image = page + ".png";
    changeimage(page, page)
    i++;
    page = "parallax-" + i;
  }
}


window.onload = function(){
   loadmodules();
   assignimages();
};
