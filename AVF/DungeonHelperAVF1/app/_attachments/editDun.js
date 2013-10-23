$('#editDungeon').live('pageshow', function(){

    var dungeonId = {};

    var setObject = function(object){
        console.log("Object: ", object);
        dungeonId._id = object._id;
        dungeonId._rev = object._rev;
        console.log("id: ", dungeonId);
    };

    function splitURL(){
        var urlData = document.URL;
        console.log("url: " + urlData);
        var urlParts = urlData.split('?');
        var urlVals = urlParts[1].split('&');
        var idVals = {};
        for (var i in urlVals){
            var keyValue = urlVals[i].split('=');
            var key = decodeURIComponent(keyValue[0]);
            var value = decodeURIComponent(keyValue[1]);
            idVals[key] = value;
        }
        console.log("URL Split");
        console.log(idVals[key]);
        return(idVals[key]);
    }

    var dungeonToChange = splitURL();

    function loadDungeonData(myDungeon){
        var dungeonInView;
        $.couch.db('dungeonhelperavf1').openDoc(myDungeon, {
            success: function(data) {
                //$('#getRidOf').remove();
                dungeonInView = data;
                setObject(data);
                console.log(dungeonInView);
                $('#dungeonName').val(data.dungeonName).trigger('create');
                $('#length').val(data.length);
                $('#levelGroup').val(data.levelGroup);
                $('#difficulty').val(data.difficulty);
                $('#description').val(data.description);
            }
        });
    }

    var currentDungeon = loadDungeonData(dungeonToChange);

    function deleteDungeon(removeID){
        var idToDelete = {};
        idToDelete._id = removeID._id;
        idToDelete._rev = removeID._rev;
        console.log("Delete ", idToDelete);
        $.couch.db('dungeonhelperavf1').removeDoc(idToDelete, {
            success: function(data){
                console.log("Beware, I Live!");
            }
        });
    }

    $('#removeDungeon').on("click", function(event){
        event.preventDefault();
        console.log("Delete: ", dungeonId);
        deleteDungeon(dungeonId);
        $.mobile.changePage( "index.html#dungeonView");
    });

    $('#updateDungeon').on("click", function(event){
        event.preventDefault();
        console.log("made it to update");
        var updateDun = {};
        updateDun._id = dungeonId._id;
        updateDun._rev = dungeonId._rev;
        console.log("Old Dungeon:" + dungeonId);
        console.log("Id: ", updateDun._id," rev: ", updateDun._rev);
        console.log("New Dungeon: ", updateDun);

        updateDun.dungeonName = $('#dungeonName').val();
        updateDun.length = $('#length').val();
        updateDun.levelGroup = $('#levelGroup').val();
        updateDun.difficulty = $('#difficulty').val();
        updateDun.description = $('#description').val();

        $.couch.db('dungeonhelperavf1').saveDoc(updateDun, {
            success: function(data) {
                console.log("Out with the old, in with the new: ", data);
                console.log(status);
                $.mobile.changePage("index.html")
            }
        });
    });
});