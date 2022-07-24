// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }
var head = document.getElementsByTagName("head")
// head[0] && head[0].append('<style type="text/css" media="print">.printHeader{display:none;}</style>');
setTimeout(() => {
  head[0] && head[0].insertAdjacentHTML("beforeend", `<style>body{background:red}</style><style type="text/css" media="print">.printHeader{display:none;}</style>`);
},2500);