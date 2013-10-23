/*
 Nathan Buth
 3-22-2012
 Project 4
 MIU 1203
 */

$(document).ready(function(){

    var genderValue,
        saveData = $("#saveData");//variables

	function resetForm(){
		window.location.reload();
	}

    function getRadio(){

    }

    /*function getRadio(){
        var radios = $("#gender");
        for(var i = 0; i < radios.length; i++){
            if (radios[i].checked){
                genderValue = radios[i].val();
            }
        }
    }//find radio value*/

    function toggleControls(n){
     switch(n){
         case "on":
         $("#addCharacter").addClass("none");
         $('#clearData').addClass("inline");
         $("#displayData").addClass("none");
         $("#addNew").addClass("inline");
         break;
         case "off":
         $("#addCharacter").addClass("block");
         $('#clearData').addClass("inline");
         $("#displayData").addClass("inline");
         $("#addNew").addClass("none");
         $("#item").addClass("none");
         break;
         default:
         return false;
        }
     }// controls to toggle links on and off

    function storeData(key){
        if(!key){
            var id = Math.floor(Math.random()*100000001);
        } else {
            id = key;
        }
        getRadio();
        var item = {};
        item.level = ["Level:", $("#level").val()];
        item.role = ["Role:", $("#role").val()];
		item.characterClass = ["Class:", $("#characterClass").val()];
		item.race = ["Race:", $("#race").val()];
		item.characterName = ["Character Name:", $("#characterName").val()];
        item.gender = ["Gender:", genderValue];
		item.height = ["Height:", $("#height").val()];
		item.weight = ["Weight:", $("#weight").val()];
		item.age = ["Age:", $("#age").val()];
		item.alignment = ["Alignment:", $("#alignment").val()];
		item.deity = ["Deity:", $("#deity").val()];
        item.mannerismsAndAppearance = ["Mannerisms and Appearance:", $("#mannerismsAndAppearance").val()];
        item.personalityTraits = ["Personality Traits:", $("#personalityTraits").val()];
        localStorage.setItem(id, JSON.stringify(item));
        alert("Character Saved!");
    }//save data to local storage

	$.validator.setDefaults({
    	ignore: ""
	});

    function validate(){
        var parseCharacterForm = function(data){
            storeData(data);
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

    function editItem(){
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);

        toggleControls("off");

        $("#level").val() = item.level[1];
		$("#role").val() = item.role[1];
		$("#characterClass").val() = item.characterClass[1];
		$("#race").val() = item.race[1];
        $("#characterName").val() = item.characterName[1];
        var radios = document.forms[0].gender;
        for(var i = 0; i < radios.length; i++){
            if(radios[i].val() == "Male" && item.gender[1] == "Male"){
                radios[i].attr("checked", "checked");
            } else if(radios[i].val() == "Female" && item.gender[1] == "Female"){
                radios[i].attr("checked", "checked");
            } else if(radios[i].val() == "Other" && item.gender[1] == "Other"){
                radios[i].attr("checked", "checked");
  			} else if(radios[i].val() == "None" && item.gender[1] == "None"){
                radios[i].attr("checked", "checked");
            }
        }
		$("#height").val() = item.height[1];
		$("#weight").val() = item.weight[1];
		$("#age").val() = item.age[1];
		$("#alignment").val() = item.alignment[1];
		$("#deity").val() = item.deity[1];
		$("#mannerismsAndAppearance").val() = item.mannerismsAndAppearance[1];
        $("#personalityTraits").val() = item.personalityTraits[1];

        saveData.unbind("click", storeData);

        $("#saveData").val() = "Edit Weapon";
        var editSubmit = $("#saveData");

        editSubmit.bind("click", validate);
        editSubmit.key = this.key;
    }//edit pieces of saved data

    function deleteItem(){
        var ask = confirm("Are you sure you want to delete this character?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("Character deleted.");
            window.location.reload();
        } else {
            alert("Character was not deleted.");
        }
    }//delete pieces of saved data

    function autoFillData(){
        for(var n in jsonCharacters){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(jsonCharacters[n]));
        }
    }//fill local storage with test data

    function fillFromXML(){

    }

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
        $(editLink).bind("click", editItem);
        editLink.html(editText);
        linksLi.append(editLink);

        var breakTag = $('<br>');
        linksLi.append(breakTag);

        var deleteLink = $("");
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Character";
        $(deleteLink).bind("click", deleteItem);
        deleteLink.html(deleteText);
        linksLi.append(deleteLink);
    }//make links inside of local storage

    function getData(){
        toggleControls("on");
        if(localStorage.length === 0){
            var ask = confirm("There are no saved characters. Would you like to fill the database with premade characters?");
            if(ask){
                autoFillData();
            } else {
                window.location.reload();
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
        $("#item").addClass("block");
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

    function eraseData(){
        if(localStorage.length === 0){
            alert("There are no saved characters at the moment.");
        } else {
            var ask = confirm("Are you sure you want to delete all saved characters?");
            if(ask){
                localStorage.clear();
                alert("All character-data has been erased.");
                window.location.reload();
                return false;
            } else {
                alert("No character-data was erased.");
                window.location.reload();
            }
        }
    }//erase everything from local storage

    //makeSelect();

	//selectClass();

    saveData.bind("click", validate);
    var clearForm = $("#clearForm");
	clearForm.bind("click", resetForm);
    var displayData = $("#displayData");
    displayData.bind("click", getData);
    var showCharacters = $("#showCharacters");
    showCharacters.bind("click", getData);
    var clearData = $("#clearData");
    clearData.bind("click", eraseData);
});