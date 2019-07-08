

var contador = 0;
var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function() {
        document.getElementById("new_note").addEventListener("click", function(){
            document.getElementById("popup_new_note").style.left = "0%";
        });
        document.getElementById("btn_cancel").addEventListener("click", function(){
            document.getElementById("popup_note_title").value = "";
            document.getElementById("popup_note_description").value = "";
            document.getElementById("popup_new_note").style.left = "100%";
            document.getElementById("app").style.filter = "none";
        });
        document.getElementById("btn_save").addEventListener("click", function(){
            var popup_titulo = document.getElementById("popup_note_title").value;
            var popup_conteudo =document.getElementById("popup_note_description").value;

            var nota = document.createElement("DIV");
            var titulo_nota = document.createElement("H2");
            var conteudo_nota = document.createElement("P");
            var data = document.createElement("DIV");
            var del = document.createElement("BUTTON");

            nota.classList.add("note");
            nota.classList.add("bounceIn");
            contador++;
            nota.setAttribute("id",contador);
            
            titulo_nota.classList.add("note_title");
            conteudo_nota.classList.add("note_content");
            del.classList.add("btn");
            del.classList.add("note_del");
            data.classList.add("date");

            titulo_nota.innerHTML = popup_titulo;
            conteudo_nota.innerHTML = popup_conteudo;
            del.innerHTML = "excluir";

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;
            data.innerHTML = today;

            del.addEventListener("click", function(){
                var id = this.parentNode.getAttribute("id");
                document.getElementById(id).outerHTML = "";
            });
            
            nota.appendChild(titulo_nota);
            nota.appendChild(conteudo_nota);
            nota.appendChild(data);
            nota.appendChild(del);

            nota.addEventListener("click", function(){
                this.classList.toggle("focus");
            });
            
            document.getElementById("content").appendChild(nota);

            document.getElementById("popup_note_title").value = "";
            document.getElementById("popup_note_description").value = "";
            document.getElementById("popup_new_note").style.left = "100%";

        });
    }
};
