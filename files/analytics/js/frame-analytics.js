var x = window.parent.document.getElementsByClassName("invisible")[0];
x.setAttribute("sandbox", "allow-scripts allow-same-origin allow-modals")
console.log(x.className);
