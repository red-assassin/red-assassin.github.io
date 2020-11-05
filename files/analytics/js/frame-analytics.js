var ele = document.createElement("a");
ele.setAttribute("href", "javascript:alert(origin)");
ele.innerHTML = "click me";
document.body.appendChild(ele);
