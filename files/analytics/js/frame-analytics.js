/*var x = window.parent.document.createElement("button");
x.setAttribute("onmouseover", "alert(1)");
x.innerHTML = "Click Me";
window.parent.document.body.appendChild(x);*/
console.log("shibli");
setTimeout(() => {
  var nonce = window.parent.document.getElementsByTagName("script")[0].nonce;
  console.log(nonce);
}, 6000);
