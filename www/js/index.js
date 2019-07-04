/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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

            var nota = document.createElement("div");
            var titulo_nota = document.createElement("h2");
            var conteudo_nota = document.createElement("p");
            var data = document.createElement("div");

            nota.classList.add("note");
            titulo_nota.classList.add("note_title");
            conteudo_nota.classList.add("note_content");
            data.classList.add("date");

            titulo_nota.innerHTML = popup_titulo;
            conteudo_nota.innerHTML = popup_conteudo;

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;
            data.innerHTML = today;

            nota.appendChild(titulo_nota);
            nota.appendChild(conteudo_nota);
            nota.appendChild(data);

            document.getElementById("content").appendChild(nota);

            document.getElementById("popup_note_title").value = "";
            document.getElementById("popup_note_description").value = "";
            document.getElementById("popup_new_note").style.left = "100%";
            document.getElementById("app").style.filter = "none";
        });
    }
};
