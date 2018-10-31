function myFunction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var res = xhttp.responseText;
            var myJson = JSON.parse(res)
            document.getElementById("myDiv").innerHTML = "";
            for (let i = 0; i < 3; i++) {
                var x = document.createElement("IMG");
                var number = Math.floor(Math.random() * Math.floor(99));
                var id = myJson.data.memes[number].id;
                var src = myJson.data.memes[number].url;
                var name = myJson.data.memes[number].name;
                var w = myJson.data.memes[number].width;
                var h = myJson.data.memes[number].height;
                console.log(id)
                x.setAttribute("id", id);
                x.setAttribute("src", src);
                x.setAttribute("width", "304px");
                x.setAttribute("height", "304px");
                x.setAttribute("alt", name);
                document.getElementById("myDiv").appendChild(x);
            }
            console.log(myJson)
            document.getElementById("demobutton").innerHTML = "Request worked!";
        }
    };
    xhttp.open("GET", "https://api.imgflip.com/get_memes", true);
    xhttp.send();
}

function getUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("data").innerHTML = "";
            // Typical action to be performed when the document is ready:
            var res = xhttp.responseText;
            var myJson = JSON.parse(res)
            for (let i = 0; i < myJson.response.length; i++) {
                var z = document.createElement("tr");
                var a = document.createElement("td");
                var b = document.createElement("td");
                var x = document.createElement("td");
                var y = document.createElement("td");
                var name = JSON.stringify(myJson.response[i].customerName);
                var phone = JSON.stringify(myJson.response[i].phone);
                var cNumber = JSON.stringify(myJson.response[i].customerNumber)
                var lName = JSON.stringify(myJson.response[i].contactLastName)
                var fName = JSON.stringify(myJson.response[i].contactFirstName)
                z.setAttribute("id", cNumber)
                a.setAttribute("id", lName);
                b.setAttribute("id", fName);
                x.setAttribute("id", name);
                y.setAttribute("id", phone);
                x.innerHTML = name;
                y.innerHTML = phone;
                a.innerHTML = lName;
                b.innerHTML = fName;
                //console.log(x)
                document.getElementById("data").appendChild(z);
                document.getElementById(cNumber).appendChild(x);
                document.getElementById(cNumber).appendChild(a);
                document.getElementById(cNumber).appendChild(b);
                document.getElementById(cNumber).appendChild(y);
            }
            console.log(myJson)
            //document.getElementById("demobutton").innerHTML = "Request worked!";
        }
    };
    xhttp.open("GET", "http://localhost:3001/1-10/1getAllUsers", true);
    xhttp.send();
}

function addUser() {
    var xhttp = new XMLHttpRequest();
    var body = {};
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    body.name = name;
    body.email = email;
    console.log(body)
    xhttp.onreadystatechange = function () {
      
        if (this.readyState == 4 && this.status == 200) {
            alert(xhttp.responseText);
        }
    };
    xhttp.open("POST", "http://localhost:3001/1-10/2addUser", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(body));
}

