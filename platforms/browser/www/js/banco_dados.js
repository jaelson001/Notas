    var db = window.openDatabase("Database", "1.0", "agenda", 2000000);
    db.transaction(createDB, errorDB, successDB);
    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady(){
        
        db.transaction(createDB, errorDB, successDB);
    }
    function errorDB(err){
        console.log("Erro: "+err);
    }
    function successDB(){}
    //Criar a tabela se a mesma não existir    
    function createDB(tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS agenda (id INTEGER PRIMARY KEY, titulo VARCHAR(30), descricao VARCHAR(500), data VARCHAR(11) )');            
    }
    //Insere informações no banco de dados
    function agenda_insert(){
        db.transaction(agenda_insert_db, errorDB, successDB);
    }
    function agenda_insert_db(tx){
        
        var titulo = document.getElementById("popup_note_title").value;
        var descricao = document.getElementById("popup_note_description").value;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var data = dd + '/' + mm + '/' + yyyy;

        tx.executeSql('INSERT INTO agenda (titulo, descricao, data) VALUES ("'+ titulo +'", "'+ descricao +'", "'+ data +'")');
        agenda_view();
    }
    
    //Efetua a leitura do banco de dados
    function agenda_view(){
        db.transaction(agenda_view_db, errorDB, successDB);
    }
    function agenda_view_db(tx){
        tx.executeSql('SELECT * FROM agenda', [], agenda_view_data, errorDB);
    }
    function agenda_view_data(tx, results){
        var len = results.rows.length;
        for (var i=0; i<len; i++){
            console.log("ID = " + results.rows.item(i).id + " Nome: " + results.rows.item(i).titulo + " Telefone: " + results.rows.item(i).descricao );
        }
    }