$(document).ready(function(){

    var saveData = $("#saveData");

    function resetForm(){
        window.location.reload();
    }

    /*function toggleControls(n){
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
     }// controls to toggle links on and off*/

    /*function storeData(key){
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
     });*/

    //var characterId = $("#role").val().toLowerCase() + ": " + $("#characterName").val().toLowerCase();

    var storeData = function (){

        console.log("Storing character.");

        var newCharacter = {'_id':$("#role").val().toLowerCase() + ":" + $("#characterName").val().toLowerCase()};

        newCharacter.level = ["Level:", $('#level').val()];
        newCharacter.role = ["Role:", $('#role').val()];
        newCharacter.characterClass = ["Class:", $('#characterClass').val()];
        newCharacter.race = ["race:", $('#race').val()];
        newCharacter.characterName = ["Name:", $('#characterName').val()];
        newCharacter.gender = ["Gender:", $('#gender').val()];
        newCharacter.height = ["Height:", $('#height').val()];
        newCharacter.weight = ["Weight:", $('#weight').val()];
        newCharacter.age = ["Age:", $('#age').val()];
        newCharacter.alignment = ["Alignment:", $('#alignment').val()];
        newCharacter.deity = ["Deity:", $('#deity').val()];
        newCharacter.mannerismsAndAppearnce = ["Mannerisms and Appearance:", $('#mannerismsAndAppearance').val()];
        newCharacter.personalityTraits = ["Personality Traits:", $('#personalityTraits').val()];
        console.log(newCharacter);

        $.couch.db('dungeonhelper').saveDoc(newCharacter, {
            success: function(data) {
                console.log("Character Saved!");
            },
            error: function(status) {
                console.log("Not enough mana" + status);
            }
        });
        alert("Character saved successfully!");

    };

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

    $('#characterView').live('pageshow', function(){
        $.ajax({
            url: '_view/characters',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                console.log("Beware, I live!", data);
                $.each(data.rows, function(index, character){
                    console.log(character.id);
                    //console.log(character.rev);
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
                    //var id = character.value._id;
                    //var rev = character.value._rev;
                    //var item = (character.value || character.doc);

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

    $('#editCharacter').live('pageshow', function(){

        var characterId = {};

        var setObject = function(object){
            console.log("Object: ", object);
            characterId._id = object._id;
            characterId._rev = object._rev;
            console.log("id: ", characterId);
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
            console.log("Bam!", characterToChange._id);
            console.log("Boom!", characterToChange._rev);
            return(idVals[key]);
        }

        var characterToChange = splitURL();

        function loadCharacterData(myCharacter){
            var characterInView;
            $.couch.db('dungeonhelper').openDoc(myCharacter, {
                success: function(data) {
                    //$('#getRidOf').remove();
                    characterInView = data;
                    setObject(data);
                    console.log(characterInView);
                    $('#level').html(data.level[1]).trigger('create');
                    $('#role').html(data.role[1]);
                    $('#characterClass').html(data.characterClass[1]);
                    $('#race').html(data.race[1]);
                    $('#characterName').html(data.characterName[1]);
                    $('#gender').html(data.gender[1]);
                    $('#height').html(data.height[1]);
                    $('#weight').html(data.weight[1]);
                    $('#age').html(data.age[1]);
                    $('#alignment').html(data.alignment[1]);
                    $('#deity').html(data.deity[1]);
                    $('#mannerismsAndAppearance').html(data.mannerismsAndAppearance[1]);
                    $('#personalityTraits').html(data.personalityTraits[1]);
                }
            });
        }

        var currentCharacter = loadCharacterData(characterToChange);

        function deleteCharacter(removeID){
            var idToDelete = {};
            idToDelete._id = removeID._id;
            idToDelete._rev = removeID._rev;
            console.log("Delete ", idToDelete);
            $.couch.db('dungeonhelper').removeDoc(idToDelete, {
                success: function(data){
                    console.log("Beware, I Live!");
                }
            });
        }

        $('#removeCharacter').on("click", function(){
            console.log("Delete: ", characterId);
            deleteCharacter(characterId);
            $.mobile.changePage( "#characterView");
        });

        $('#updateCharacter').on("click", function(){

            $.couch.db('dungeonhelper').saveDoc(currentCharacter, {
                success: function(data) {
                    console.log(data);
                }
            });
        });
    });

    /*function editItem(){
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
         }//edit pieces of saved data*/

        /*function deleteItem(){
            var ask = confirm("Are you sure you want to delete this character?");
            if(ask){
                localStorage.removeItem(this.key);
                alert("Character deleted.");
                window.location.reload();
            } else {
         alert("Character was not deleted.");
         }
     }//delete pieces of saved data*/

    /*function autoFillData(){
         for(var n in jsonCharacters){
             var id = Math.floor(Math.random()*100000001);
             localStorage.setItem(id, JSON.stringify(jsonCharacters[n]));
         }
     }//fill local storage with test data*/

    /*function getImage(role, makeSubList){
         var imageLi = $("<li></li>");
         makeSubList.append(imageLi);
         var newImage = $("<img />");
         newImage.attr("src", "/" + role + ".png");
         imageLi.append(newImage);
    }//assign images to saved pieces of data

    /*function makeItemLinks(key, linksLi){
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
        }//make links inside of local storage*/

    /*function getData(){
         toggleControls("on");
         if(localStorage.length === 0){
            var ask = confirm("There are no saved characters. Would you like to fill the database with premade characters?");
         if(ask){
            autoFillData();
         } else {
            window.location.reload();
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
     }//view data in local storage*/

    /*function eraseData(){
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
    }//erase everything from local storage*/

    saveData.bind("click", validate);
    //deleteChar.bind("click", deleteCharacter());
    //var clearForm = $("#clearForm");
    //clearForm.bind("click", resetForm);
    //var clearData = $("#clearData");
    //clearData.bind("click", eraseData);
});// Paste your code in here!






