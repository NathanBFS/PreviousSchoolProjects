/*
 Nathan Buth
 07-04-2012
 Project 1
 AVF 1207
 */

    $('#home').on('pageinit', function(){
        //alert("After updating or deleting a character, in order to proceed further into the app you must change the url so that after www/ it says index.html.  I tried to fix this issue but could not figure it out.");

    });

    $('#dungeonForm').on('pageinit', function () {
        //console.log("Dungeon Form loaded.");

        $.couch.urlPrefix = 'https:\/\/ownywhengingsocuoustlifi:oyjevpGeUiJNQGkvuS0N7EbW@nathanbfs.cloudant.com';

        function dungeonNotification(){

            function alertNotificationDismissed() {

            }

            navigator.notification.alert(
                'Dungeon Saved Successfully!',
                alertNotificationDismissed,
                'Save Successful!',
                'Close'
            );

            navigator.notification.beep(1);

            navigator.notification.vibrate(500);

        }

        var saveDunData = $("#saveDunData");//variables

        var storeDunData = function (){

            //console.log("Storing Dungeon.");

            var newDungeon = {'_id':"dungeon:"+$("#difficulty").val().toLowerCase() + ":" + $("#dungeonName").val().toLowerCase()};

            newDungeon.dungeonName = $('#dungeonName').val();
            newDungeon.length = $('#length').val();
            newDungeon.levelGroup = $('#levelGroup').val();
            newDungeon.difficulty = $('#difficulty').val();
            newDungeon.description = $('#description').val();
            //console.log(newDungeon);

            $.couch.db('dungeonhelperavf1').saveDoc(newDungeon, {
                success: function(data) {
                    //console.log("Dungeon Saved!");
                },
                error: function(status) {
                    //console.log(status);
                }
            });
            dungeonNotification();

        };

        function validate(){
            var parseDungeonForm = function(data){
                storeDunData(data);
            };
            $(document).ready(function(){
                var dForm = $("#createDungeonForm");
                dForm.validate({
                    invalidHandler: function(form, validator){},
                    submitHandler: function(){
                        var data = dForm.serializeArray();
                        parseDungeonForm(data);
                    }
                });
            });
        }//validate by making sure that required fields are filled
        saveDunData.on("click", validate);
    });

    $('#dungeonView').live('pageshow', function(){

        $.ajax({
            url: 'https:\/\/ownywhengingsocuoustlifi:oyjevpGeUiJNQGkvuS0N7EbW@nathanbfs.cloudant.com\/dungeonhelperavf1\/_design\/dungeonhelperavf1\/_view\/dungeons',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                //console.log("Beware, I live!", data);
                $.each(data.rows, function(index, dungeon){
                    //console.log(dungeon.id);
                    ////console.log(dungeon.rev);
                    var dungeonName = dungeon.value.dungeonName;
                    var length = dungeon.value.length;
                    var levelGroup = dungeon.value.levelGroup;
                    var difficulty = dungeon.value.difficulty;
                    var description = dungeon.value.description;

                    $('#dungeonLists').append('<div data-role="collapsible" data-inset="true" data-theme="a" data-content-theme="c">' +
                        '<h3>' + dungeonName + '</h3>' +
                        '<div align="center" data-role="controlgroup" data-type="horizontal" data-mini="true">' +
                        '<p><a href="editDungeon.html?_id=' + dungeon.id + '" id="editLink" rel="external" data-ajax="false" data-role="button" data-inline="true">Edit or Remove Dungeon</a>' +
                        '</div>' +
                        '<div align="center">' +
                        '<p><strong>Length:</strong> ' + length + '</p>' +
                        '<p><strong>Level Group:</strong> ' + levelGroup + '</p>' +
                        '<p><strong>Difficulty:</strong> ' + difficulty + '</p>' +
                        '<p><strong>Description:</strong> ' + description + '</p>' +
                        '</div>' +
                        '</div>').trigger('create');

                });
            },
            error: function(result){
                //console.log("Sinistar is down" + result);
            }
        });
    });

/************************************************************************************************************************/
    $('#addCharacter').on('pageinit', function () {
        //console.log("Character Form loaded.");

        $.couch.urlPrefix = 'https:\/\/ownywhengingsocuoustlifi:oyjevpGeUiJNQGkvuS0N7EbW@nathanbfs.cloudant.com';

        function characterNotification(){

            function alertNotificationDismissed() {

            }

            navigator.notification.alert(
                'Character Saved Successfully!',
                alertNotificationDismissed,
                'Save Successful!',
                'Close'
            );

            navigator.notification.beep(1);

            navigator.notification.vibrate(500);

        }

        var saveCharData = $("#saveCharData");//variables

        var storeCharData = function (){

            //console.log("Storing Character.");

            var newCharacter = {'_id':"character:"+$("#role").val().toLowerCase() + ":" + $("#characterName").val().toLowerCase()};

            newCharacter.level = $('#level').val();
            newCharacter.role = $('#role').val();
            newCharacter.characterClass = $('#characterClass').val();
            newCharacter.race = $('#race').val();
            newCharacter.characterName = $('#characterName').val();
            newCharacter.gender = $('#gender').val();
            newCharacter.height = $('#height').val();
            newCharacter.weight = $('#weight').val();
            newCharacter.age = $('#age').val();
            newCharacter.alignment = $('#alignment').val();
            newCharacter.deity = $('#deity').val();
            newCharacter.mannerismsAndAppearance = $('#mannerismsAndAppearance').val();
            newCharacter.personalityTraits = $('#personalityTraits').val();
            //console.log(newCharacter);

            $.couch.db('dungeonhelperavf1').saveDoc(newCharacter, {
                success: function(data) {
                    //console.log("Character Saved!");
                },
                error: function(status) {
                    //console.log(status);
                }
            });
            characterNotification();
        };

        function validate(){
            var parseCharacterForm = function(data){
                storeCharData(data);
            };
            $(document).ready(function(){
                var cForm = $("#createCharacterForm");
                cForm.validate({
                    invalidHandler: function(form, validator){},
                    submitHandler: function(){
                        var data = cForm.serializeArray();
                        parseCharacterForm(data);
                    }
                });
            });
        }//validate by making sure that required fields are filled
        saveCharData.on("click", validate);
    });



    $('#characterView').live('pageshow', function(){

        $.ajax({
            url: 'https:\/\/ownywhengingsocuoustlifi:oyjevpGeUiJNQGkvuS0N7EbW@nathanbfs.cloudant.com\/dungeonhelperavf1\/_design\/dungeonhelperavf1\/_view\/characters',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                //console.log("Beware, I live!", data);
                $.each(data.rows, function(index, character){
                    //console.log(character.id);
                    ////console.log(character.rev);
                    var level = character.value.level;
                    var role = character.value.role;
                    var characterClass = character.value.characterClass;
                    var race = character.value.race;
                    var characterName = character.value.characterName;
                    var gender = character.value.gender;
                    var height = character.value.height;
                    var weight = character.value.weight;
                    var age = character.value.age;
                    var alignment = character.value.alignment;
                    var deity = character.value.deity;
                    var mannerismsAndAppearance = character.value.mannerismsAndAppearance;
                    var personalityTraits = character.value.personalityTraits;

                    $('#characterLists').append('<div data-role="collapsible" data-inset="true" data-theme="a" data-content-theme="c">' +
                        '<h3>' + characterName + '</h3>' +
                        '<div align="center" data-role="controlgroup" data-type="horizontal" data-mini="true">' +
                        '<p><a href="editCharacter.html?_id=' + character.id + '" id="editLink" rel="external" data-ajax="false" data-role="button" data-inline="true">Edit or Remove Character</a>' +
                        '</div>' +
                        '<div align="center">' +
                        '<p><strong>Level:</strong> ' + level + '</p>' +
                        '<p><strong>Role:</strong> ' + role + '</p>' +
                        '<p><strong>Class:</strong> ' + characterClass + '</p>' +
                        '<p><strong>Race:</strong> ' + race + '</p>' +
                        '<p><strong>Gender:</strong> ' + gender + '</p>' +
                        '<p><strong>Height:</strong> ' + height + '</p>' +
                        '<p><strong>Weight:</strong> ' + weight + '</p>' +
                        '<p><strong>Age:</strong> ' + age + '</p>' +
                        '<p><strong>Alignment:</strong> ' + alignment + '</p>' +
                        '<p><strong>Deity:</strong> ' + deity + '</p>' +
                        '<p><strong>Mannerisms and Appearance:</strong> ' + mannerismsAndAppearance + '</p>' +
                        '<p><strong>Personality Traits:</strong> ' + personalityTraits + '</p>' +
                        '</div>' +
                        '</div>').trigger('create');

                });
            },
            error: function(result){
                //console.log("Sinistar is down" + result);
            }
        });
    });
//Character Form Javascript

/*************************************************Upcoming Features*******************************************/

    //Geolocation
    var x=document.getElementById("text");

    function showGeolocation(position){

        $('<div/>').attr('id','mapcanvas').attr('style', 'height:250px;').addClass('map-canvas').appendTo('#mapArea');


        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title:"We are watching you! (almost.  You are actually located somewhere within "+position.coords.accuracy+" meter radius)"
        });

    }

    function errors(error){

        $('<div/>').attr('id', 'x').appendTo('#content');
        switch(error.code){

            case error.PERMISSION_DENIED:
                $('#x').html("User decided to not share their location.");
                break;
            case error.POSITION_UNAVAILABLE:
                $('#x').html("Location information is inaccessible.");
                break;
            case error.TIMEOUT:
                $('#x').html("Attempt to grab location information failed due to timeout.");
                break;
            case error.UNKNOWN_ERROR:
                $('#x').html("An unknown error occurred.");
                break;
        }
    }

    function getGeolocation(){

        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showGeolocation,errors);
        }
        else{x.innerHTML="Geolocation is not supported by this browser.";}

    }

    $("#getGeolocationButton").on('click',function(){
        //console.log("I am loading?");
        getGeolocation();
    });//Camera

    //Camera
    var takePhoto = function (imageData) {
        var image = $('#myImage');
        image.attr("src", "data:image/jpeg;base64," + imageData);
        image.height('25%');
        image.width('30%');
        image.css("display","block");
        image.css("margin-left","auto");
        image.css("margin-right","auto");
    };
    var failedTakeAttempt = function (message) {
        alert('Failed because: ' + message);
    };

    $('#takePicture').bind("click", function(){
        navigator.camera.getPicture(takePhoto, failedTakeAttempt, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: true
        });
    });//Camera

    //File Read and Write
    $('#writeFile').bind("click", function(){

        function writeFail(error) {
            alert(error.code);
        }

        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                alert("File Written!");
            };
            var writtenFile = writer.write("Welcome to Dungeon Helper!");
        }

        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, writeFail);
        }

        function gotFilesystem(fileSystem) {
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, writeFail);
        }

        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFilesystem, writeFail);
        }

        document.addEventListener("deviceready", onDeviceReady, false);

    });

    $('#readFile').bind("click", function(){

        function readFail(evt) {
            alert(evt.target.error.code);
        }

        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                alert(evt.target.result);
            };
            reader.readAsText(file);
        }

        function gotFile(file){
            readAsText(file);
        }

        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, readFail);
        }

        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, readFail);
        }

        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, readFail);
        }

        document.addEventListener("deviceready", onDeviceReady, false);

    });//File Read and Write