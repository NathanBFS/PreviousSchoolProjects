/*
 Nathan Buth
 06-01-2012
 Project 1
 ASD 1206
 */
    $('#dungeonForm').on('pageinit', function () {
        console.log("Dungeon Form loaded.");

        var saveDunData = $("#saveDunData");//variables

        var storeDunData = function (){

            console.log("Storing Dungeon.");

            var newDungeon = {'_id':$("#difficulty").val().toLowerCase() + ":" + $("#dungeonName").val().toLowerCase()};

            newDungeon.dungeonName = $('#dungeonName').val();
            newDungeon.length = $('#length').val();
            newDungeon.levelGroup = $('#levelGroup').val();
            newDungeon.difficulty = $('#difficulty').val();
            newDungeon.description = $('#description').val();
            console.log(newDungeon);

            $.couch.db('dungeonhelper2').saveDoc(newDungeon, {
                success: function(data) {
                    console.log("Dungeon Saved!");
                },
                error: function(status) {
                    console.log(status);
                }
            });
            alert("Dungeon saved successfully!");

        };

        function validate(){
            var parseDungeonForm = function(data){
                storeDunData(data);
            };
            //$('#dungeonForm').on('pageinit', function () {
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
            url: '_view/dungeons',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                console.log("Beware, I live!", data);

                $("#dungeonView").html("");

                $.each(data.rows, function(index, dungeon){
                    console.log(dungeon.id);
                    //console.log(dungeon.rev);
                    var dungeonName = dungeon.value.dungeonName;
                    var length = dungeon.value.length;
                    var levelGroup = dungeon.value.levelGroup;
                    var difficulty = dungeon.value.difficulty;
                    var description = dungeon.value.description;
                    //var id = dungeon.value._id;
                    //var rev = dungeon.value._rev;
                    //var item = (dungeon.value || dungeon.doc);

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
                        //'<p><strong>Id:</strong>' + id + '</p>' +
                        //'<p><strong>Rev:</strong>' + rev + '</p>' +
                        '</div>' +
                        '</div>').trigger('create');

                });
            },
            error: function(result){
                console.log("Sinistar is down" + result);
            }
        });
    });

/************************************************************************************************************************/

$('#characterForm').on('pageinit', function () {
    console.log("Character Form loaded.");

    var saveCharData = $("#saveCharData");//variables

	function resetCharForm(){
		location.reload(true);
	}

    function toggleControls(n){
     switch(n){
         case "on":
         $("#addCharacter").addClass("none");
         $('#clearCharData').addClass("inline");
         $("#displayCharData").addClass("none");
         $("#addNew").addClass("inline");
         break;
         case "off":
         $("#addCharacter").addClass("block");
         $('#clearCharData').addClass("inline");
         $("#displayCharData").addClass("inline");
         $("#addNew").addClass("none");
         $("#character").addClass("none");
         break;
         default:
         return false;
        }
     }// controls to toggle links on and off

    function storeCharData(key){
        if(!key){
            var id = Math.floor(Math.random()*100000001);
        } else {
            id = key;
        }
        var character = {};
        character.level = ["Level:", $("#level").val()];
        character.role = ["Role:", $("#role").val()];
		character.characterClass = ["Class:", $("#characterClass").val()];
		character.race = ["Race:", $("#race").val()];
		character.characterName = ["Character Name:", $("#characterName").val()];
        character.gender = ["Gender:", $("#gender").val()];
		character.height = ["Height:", $("#height").val()];
		character.weight = ["Weight:", $("#weight").val()];
		character.age = ["Age:", $("#age").val()];
		character.alignment = ["Alignment:", $("#alignment").val()];
		character.deity = ["Deity:", $("#deity").val()];
        character.mannerismsAndAppearance = ["Mannerisms and Appearance:", $("#mannerismsAndAppearance").val()];
        character.personalityTraits = ["Personality Traits:", $("#personalityTraits").val()];
        localStorage.setItem(id, JSON.stringify(character));
        alert("Character Saved!");
    }//save data to local storage

	$.validator.setDefaults({
    	ignore: ""
	});

    function validate(){
        var parseCharacterForm = function(data){
            storeCharData(data);
        };
        $('#characterForm').on('pageinit', function () {
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

    function editCharacter(){
        var value = localStorage.getItem(this.key);
        var character = JSON.parse(value);

        toggleControls("off");

        $("#level").val() = character.level[1];
		$("#role").val() = character.role[1];
		$("#characterClass").val() = character.characterClass[1];
		$("#race").val() = character.race[1];
        $("#characterName").val() = character.characterName[1];
        $("#gender").val() = character.gender[1];
		$("#height").val() = character.height[1];
		$("#weight").val() = character.weight[1];
		$("#age").val() = character.age[1];
		$("#alignment").val() = character.alignment[1];
		$("#deity").val() = character.deity[1];
		$("#mannerismsAndAppearance").val() = character.mannerismsAndAppearance[1];
        $("#personalityTraits").val() = character.personalityTraits[1];

        saveCharData.unbind("click", storeCharData);

        $("#saveCharData").val() = "Edit Character";
        var editSubmit = $("#saveCharData");

        editSubmit.on("click", validate);
        editSubmit.key = this.key;
    }//edit pieces of saved data

    function deleteCharacter(){
        var ask = confirm("Are you sure you want to delete this character?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("Character deleted.");
            location.reload(true);
;
        } else {
            alert("Character was not deleted.");
        }
    }//delete pieces of saved data

    function autoFillCharData(){
        for(var n in jsonCharacters){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(jsonCharacters[n]));
        }
    }//fill local storage with test data

    function getImage(role, makeSubList){
        var imageLi = $("<li></li>");
        makeSubList.append(imageLi);
        var newImage = $("<img />");
        newImage.attr("src", "images/" + role + ".png");
        imageLi.append(newImage);

    }//assign images to saved pieces of data

    function makeItemLinks(key, linksLi){
        var editLink = $("");
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Character";
        $(editLink).on("click", editCharacter);
        editLink.html(editText);
        linksLi.append(editLink);

        var breakTag = $('<br>');
        linksLi.append(breakTag);

        var deleteLink = $("");
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Character";
        $(deleteLink).on("click", deleteCharacter);
        deleteLink.html(deleteText);
        linksLi.append(deleteLink);
    }//make links inside of local storage

    function getCharData(){
        toggleControls("on");
        if(localStorage.length === 0){
            var ask = confirm("There are no saved characters. Would you like to fill the database with premade characters?");
            if(ask){
                autoFillCharData();
            } else {
                location.reload(true);
;
            }
        }
        var makeDiv = $("#characterView");
        makeDiv.attr({
            dataRole: "content",
            dataTheme: "c"
        });
        makeDiv.append("<ul id=" + "characterList" + "></ul>");
        var makeList = $("#characterList");
        makeList.attr({
            dataRole: "listview",
            dataInset: "true",
            dataFilter: "true",
            dataTheme: "a"
        });

        makeDiv.append(makeList);
        //document.body.append(makeDiv);
        $("#character").addClass("block");
        for(var i = 0, len=localStorage.length; i < len; i++){
            var makeli = $("<li></li>");
            var linksLi = $("<li></li>");
            makeList.append(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = $("<ul></ul>");
            makeli.append(makeSubList);
            getImage(obj.role[1], makeSubList);
            for(var n in obj){
                var optSubText = obj[n][0] + " " + obj[n][1];
                var makeSubli = $("<li></li>");
                makeSubList.append(makeSubli);
                makeSubli.append(optSubText);
                makeSubList.append(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi);
        }
    }//view data in local storage

    function eraseCharData(){
        if(localStorage.length === 0){
            alert("There are no saved characters at the moment.");
        } else {
            var ask = confirm("Are you sure you want to delete all saved characters?");
            if(ask){
                localStorage.clear();
                alert("All character-data has been erased.");
                location.reload(true);
;
                return false;
            } else {
                alert("No character-data was erased.");
                location.reload(true);
;
            }
        }
    }//erase everything from local storage

    //makeSelect();

	//selectClass();

    saveCharData.on("click", validate);
    var clearCharForm = $("#clearCharForm");
	clearCharForm.on("click", resetCharForm);
    var displayCharData = $("#displayCharData");
    displayCharData.on("click", getCharData);
    var showCharacters = $("#showCharacters");
    showCharacters.on("click", getCharData);
    var clearCharData = $("#clearCharData");
    clearCharData.on("click", eraseCharData);

});//Character Form Javascript
