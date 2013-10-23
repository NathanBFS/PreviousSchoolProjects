/*
 Nathan Buth
 06-01-2012
 Project 1
 ASD 1206
 */
$('#dungeonForm').on('pageinit', function () {
    console.log("Dungeon Form loaded.");

    var saveDunData = $("#saveDunData");//variables

    function resetDunForm(){
        location.reload(true);
    }

    function toggleControls(n){
        switch(n){
            case "on":
                $("#addDungeon").addClass("none");
                $('#clearDunData').addClass("inline");
                $("#displayDunData").addClass("none");
                $("#addNew").addClass("inline");
                break;
            case "off":
                $("#addDungeon").addClass("block");
                $('#clearDunData').addClass("inline");
                $("#displayDunData").addClass("inline");
                $("#addNew").addClass("none");
                $("#dungeon").addClass("none");
                break;
            default:
                return false;
        }
    }// controls to toggle links on and off

    function storeDunData(key){
        if(!key){
            var id = Math.floor(Math.random()*100000001);
        } else {
            id = key;
        }
        var dungeon = {};
        dungeon.dungeonName = ["Dungeon Name:", $("#dungeonName").val()];
        dungeon.length = ["Length:", $("#length").val()];
        dungeon.levelGroup = ["Level Group:", $("#levelGroup").val()];
        dungeon.difficulty = ["Difficulty:", $("#difficulty").val()];
        dungeon.description = ["Description:", $("#description").val()];
        localStorage.setItem(id, JSON.stringify(character));
        alert("Character Saved!");
    }//save data to local storage

    $.validator.setDefaults({
        ignore: ""
    });

    function validate(){
        var parseDungeonForm = function(data){
            storeDunData(data);
        };
        $('#dungeonForm').on('pageinit', function () {
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

    function editDungeon(){
        var value = localStorage.getItem(this.key);
        var dungeon = JSON.parse(value);

        toggleControls("off");

        $("#dungeonName").val() = dungeon.dungeonName[1];
        $("#length").val() = dungeon.length[1];
        $("#levelGroup").val() = dungeon.levelGroup[1];
        $("#difficulty").val() = dungeon.difficulty[1];
        $("#description").val() = dungeon.description[1];

        saveDunData.unbind("click", storeDunData);

        $("#saveDunData").val() = "Edit Dungeon";
        var editSubmit = $("#saveDunData");

        editSubmit.on("click", validate);
        editSubmit.key = this.key;
    }//edit pieces of saved data

    function deleteDungeon(){
        var ask = confirm("Are you sure you want to delete this dungeon?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("Dungeon deleted.");
            location.reload(true);
;
        } else {
            alert("Dungeon was not deleted.");
        }
    }//delete pieces of saved data

    function autoFillDunData(){
        for(var n in jsonDungeons){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(jsonDungeons[n]));
        }
    }//fill local storage with test data

    function getImage(role, makeSubList){
        var imageLi = $("<li></li>");
        makeSubList.append(imageLi);
        var newImage = $("<img />");
        newImage.attr("src", "images/" +  + ".png");
        imageLi.append(newImage);

    }//assign images to saved pieces of data

    function makeItemLinks(key, linksLi){
        var editLink = $("");
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Dungeon";
        $(editLink).on("click", editDungeon);
        editLink.html(editText);
        linksLi.append(editLink);

        var breakTag = $('<br>');
        linksLi.append(breakTag);

        var deleteLink = $("");
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Dungeon";
        $(deleteLink).on("click", deleteDungeon);
        deleteLink.html(deleteText);
        linksLi.append(deleteLink);
    }//make links inside of local storage

    function getDunData(){
        toggleControls("on");
        if(localStorage.length === 0){
            var ask = confirm("There are no saved dungeons. Would you like to fill the database with premade dungeons?");
            if(ask){
                autoFillDunData();
            } else {
                location.reload(true);
;
            }
        }
        var makeDiv = $("#dungeonView");
        makeDiv.attr({
            dataRole: "content",
            dataTheme: "c"
        });
        makeDiv.append("<ul id=" + "dungeonList" + "></ul>");
        var makeList = $("#dungeonList");
        makeList.attr({
            dataRole: "listview",
            dataInset: "true",
            dataFilter: "true",
            dataTheme: "a"
        });

        makeDiv.append(makeList);
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

    function eraseDunData(){
        if(localStorage.length === 0){
            alert("There are no saved dungeons at the moment.");
        } else {
            var ask = confirm("Are you sure you want to delete all saved dungeons?");
            if(ask){
                localStorage.clear();
                alert("All dungeon-data has been erased.");
                location.reload(true);
;
                return false;
            } else {
                alert("No dungeon-data was erased.");
                location.reload(true);
;
            }
        }
    }//erase everything from local storage

    saveDunData.on("click", validate);
    var clearDunForm = $("#clearDunForm");
    clearDunForm.on("click", resetDunForm);
    var displayDunData = $("#displayDunData");
    displayDunData.on("click", getDunData);
    var showDungeons = $("#showDungeons");
    showDungeons.on("click", getDunData);
    var clearDunData = $("#clearDunData");
    clearDunData.on("click", eraseDunData);

});//Dungeon Form Javascript

/************************************************************************************************************************/

$('#characterForm').on('pageinit', function () {
    console.log("Character Form loaded.");

    var saveCharData = $("#saveCharData");//variables

	function resetCharForm(){
		location.reload(true);
;
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
