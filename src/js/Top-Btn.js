let btt = document.getElementById( "btn-top" ),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight,
    isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;

//Calculate the document height

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight,
docElem.offsetHeight)

if (docHeight != 'undefined') {
  offset = docHeight / 4;
}

// Scroll event listener
window.addEventListener("scroll", function(event) {
  scrollPos = body.scrollTop || docElem.scrollTop;

  btt.className = (scrollPos > offset) ? "visible" : "";
});

// Click event listener
btt.addEventListener( "click", function(event) {
  event.preventDefault();

  if (isFirefox) {
    docElem.scrollTop = 0;
  } else {
    body.scrollTop = 0;
  }
});

// Click event listener
btt.addEventListener( "click", function(event) {
  event.preventDefault();

  if (isChrome) {
    docElem.scrollTop = 0;
  } else {
    body.scrollTop = 0;
  }
});
