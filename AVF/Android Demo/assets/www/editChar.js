$('#editCharacter').live('pageshow', function(){
    //console.log("Character update loaded.")

    $.couch.urlPrefix = 'https:\/\/ownywhengingsocuoustlifi:oyjevpGeUiJNQGkvuS0N7EbW@nathanbfs.cloudant.com';

    var characterId = {};

    var setObject = function(object){
        //console.log("Object: ", object);
        characterId._id = object._id;
        characterId._rev = object._rev;
        //console.log("id: ", characterId);
    };

    function splitURL(){
        var urlData = document.URL;
        //console.log("url: " + urlData);
        var urlParts = urlData.split('?');
        var urlVals = urlParts[1].split('&');
        var idVals = {};
        for (var i in urlVals){
            var keyValue = urlVals[i].split('=');
            var key = decodeURIComponent(keyValue[0]);
            var value = decodeURIComponent(keyValue[1]);
            idVals[key] = value;
        }
        //console.log("URL Split");
        //console.log(idVals[key]);
        return(idVals[key]);
    }

    var characterToChange = splitURL();

    function loadCharacterData(myCharacter){
        var characterInView;
        $.couch.db('dungeonhelperavf1').openDoc(myCharacter, {
            success: function(data) {
                //$('#getRidOf').remove();
                characterInView = data;
                setObject(data);
                //console.log(characterInView);
                $('#level').val(data.level).trigger('create');
                $('#role').val(data.role);
                $('#characterClass').val(data.characterClass);
                $('#race').val(data.race);
                $('#characterName').val(data.characterName);
                $('#gender').val(data.gender);
                $('#height').val(data.height);
                $('#weight').val(data.weight);
                $('#age').val(data.age);
                $('#alignment').val(data.alignment);
                $('#deity').val(data.deity);
                $('#mannerismsAndAppearance').val(data.mannerismsAndAppearance);
                $('#personalityTraits').val(data.personalityTraits);
            }
        });
    }

    var currentCharacter = loadCharacterData(characterToChange);

    function deleteCharacterNotification(){

        function alertNotificationDismissed() {

        }

        navigator.notification.alert(
            'Character Deleted Successfully!',
            alertNotificationDismissed,
            'Delete Successful!',
            'Close'
        );

        navigator.notification.beep(1);

        navigator.notification.vibrate(500);

    }

    function deleteCharacter(removeID){
        var idToDelete = {};
        idToDelete._id = removeID._id;
        idToDelete._rev = removeID._rev;
        //console.log("Delete ", idToDelete);
        $.couch.db('dungeonhelperavf1').removeDoc(idToDelete, {
            success: function(data){
                //console.log("Beware, I Live!");
            }
        });
        deleteCharacterNotification();
    }

    $('#removeCharacter').on("click", function(event){
        event.preventDefault();
        //console.log("Delete: ", characterId);
        deleteCharacter(characterId);
        $.mobile.changePage( "index.html");
    });

    function updateCharacterNotification(){

        function alertNotificationDismissed() {

        }

        navigator.notification.alert(
            'Character Updated Successfully!',
            alertNotificationDismissed,
            'Update Successful!',
            'Close'
        );

        navigator.notification.beep(1);

        navigator.notification.vibrate(500);

    }

    $('#updateCharacter').on("click", function(event){
        event.preventDefault();
        //console.log("Made it to update");
        var updateChar = {};
        updateChar._id = characterId._id;
        updateChar._rev = characterId._rev;
        //console.log("Old Dungeon:" + characterId);
        //console.log("Id: ", updateChar._id," rev: ", updateChar._rev);
        //console.log("New Dungeon: ", updateChar);

        updateChar.level = $('#level').val();
        updateChar.role = $('#role').val();
        updateChar.characterClass = $('#characterClass').val();
        updateChar.race = $('#race').val();
        updateChar.characterName = $('#characterName').val();
        updateChar.gender = $('#gender').val();
        updateChar.height = $('#height').val();
        updateChar.weight = $('#weight').val();
        updateChar.age = $('#age').val();
        updateChar.alignment = $('#alignment').val();
        updateChar.deity = $('#deity').val();
        updateChar.mannerismsAndAppearance = $('#mannerismsAndAppearance').val();
        updateChar.personalityTraits = $('#personalityTraits').val();

        $.couch.db('dungeonhelperavf1').saveDoc(updateChar, {
            success: function(data) {
                //console.log("Out with the old, in with the new: ", data);
                //console.log(status);
                $.mobile.changePage("index.html");
            }
        });
        updateCharacterNotification();
    });
});