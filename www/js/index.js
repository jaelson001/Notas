var contador = (localStorage.length)/3;

window.onload = function(){
    for (var i = 1; i <= contador; i++) {
        var popup_titulo = localStorage.getItem(i+"_t");
        var popup_conteudo = localStorage.getItem(i+"_c");
        var today = localStorage.getItem(i+"_d");

        var nota = document.createElement("DIV");
        var titulo_nota = document.createElement("H2");
        var conteudo_nota = document.createElement("P");
        var data = document.createElement("DIV");
        var del = document.createElement("BUTTON");

        nota.classList.add("note");
        nota.classList.add("bounceIn");
        nota.setAttribute("id",i);
        titulo_nota.classList.add("note_title");
        conteudo_nota.classList.add("note_content");
        del.classList.add("btn");
        del.classList.add("note_del");
        data.classList.add("date");

        titulo_nota.innerHTML = popup_titulo;
        conteudo_nota.innerHTML = popup_conteudo;
        del.innerHTML = "excluir";
        data.innerHTML = today;

        del.addEventListener("click", function(){
            var id = this.parentNode.getAttribute("id");
            document.getElementById(id).outerHTML = "";

            // REMOVER LOCALMENTE
            localStorage.removeItem(id+"_t");
            localStorage.removeItem(id+"_c");
            localStorage.removeItem(id+"_d");
        });

        nota.appendChild(titulo_nota);
        nota.appendChild(conteudo_nota);
        nota.appendChild(data);
        nota.appendChild(del);

        nota.addEventListener("click", function(){
            this.classList.toggle("focus");
        });
        
        document.getElementById("content").appendChild(nota);
    }
}

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

            contador++;
            nota.classList.add("note");
            nota.classList.add("bounceIn");
            nota.setAttribute("id",contador);
            titulo_nota.setAttribute("id",contador+"_t");
            conteudo_nota.setAttribute("id",contador+"_c");
            data.setAttribute("id",contador+"_d");
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

                // REMOVER LOCALMENTE
                localStorage.removeItem(id+"_t");
                localStorage.removeItem(id+"_c");
                localStorage.removeItem(id+"_d");
            });
            
            // SALVAR LOCALMENTE
            localStorage.setItem(contador+"_t", popup_titulo);
            localStorage.setItem(contador+"_c", popup_conteudo);
            localStorage.setItem(contador+"_d", today);

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
