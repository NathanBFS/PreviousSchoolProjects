/*
 Nathan Buth
 3-22-2012
 Project 4
 MIU 1203
 */

window.addEventListener("DOMContentLoaded", function doItAll(){

    function grab(e){
        var elementID = document.getElementById(e);
        return elementID;
    }

    var /*role = ["--Role--", "Striker", "Defender", "Controller", "Leader"]*/
        genderValue,
        saveData = grab("saveData");//variables

	/*function selectClass(){
		var roleType = grab("role").value,
			strikerClassList = grab("strikerClasses"),
			defenderClassList = grab("defenderClasses"),
			controllerClassList = grab("controllerClasses"),
			leaderClassList = grab("leaderClasses");
		if (roleType = Striker){
			strikerClassList.style.visibility = visible;	
		} else {
			strikerClassList.style.visibility = hidden;
		}
		if (roleType = Defender){
			defenderClassList.style.visibility = visible;	
		} else {
			defenderClassList.style.visibility = hidden;
		}
		if (roleType = Controller){
			controllerClassList.style.visibility = visible;	
		} else {
			controllerClassList.style.visibility = hidden;
		}
		if (roleType = Leader){
			leaderClassList.style.visibility = visible;	
		} else {
			leaderClassList.style.visibility = hidden;
		}
	}*///Dropddown Hider Attempt 1
	
	/*function selectClass(){
		if (document.form.getElementById("role").value == "Striker"){   
			document.form.getElementById("strikerClasses").style.visibility = "visible";
			document.form.getElementById("strikerClasses").setAttribute("class", "required");
		}else{
			document.form.getElementById("strikerClasses").style.visibility = "hidden";  
			document.form.getElementById("strikerClasses").setAttribute("class", "");
		}
		document.form.getElementById("strikerClasses").style.visibility = "hidden";
		document.form.getElementById("strikerClasses").setAttribute("class", "");
		if (document.form.role.value = "Defender"){   
			document.getElementById("defenderClasses").style.visibility = "visible";
			document.getElementById("defenderClasses").setAttribute("class", "required");
		}else{
			document.getElementById("defenderClasses").style.visibility = "hidden";  
			document.getElementById("defenderClasses").setAttribute("class", "");
		}
		document.getElementById("defenderClasses").style.visibility = "hidden";  
		document.getElementById("defenderClasses").setAttribute("class", "");
		if (document.form.role.value = "Controller"){   
			document.getElementById("controllerClasses").style.visibility = "visible";
			document.getElementById("controllerClasses").setAttribute("class", "required");
		}else{
			document.getElementById("controllerClasses").style.visibility = "hidden";  
			document.getElementById("controllerClasses").setAttribute("class", "");
		}
		document.getElementById("controllerClasses").style.visibility = "hidden";  
		document.getElementById("controllerClasses").setAttribute("class", "");
		if (document.form.role.value = "Leader"){   
			document.getElementById("leaderClasses").style.visibility = "visible";
			document.getElementById("leaderClasses").setAttribute("class", "required");
		}else{
			document.getElementById("leaderClasses").style.visibility = "hidden";  
			document.getElementById("leaderClasses").setAttribute("class", "");
		}
		document.getElementById("leaderClasses").style.visibility = "hidden";  
		document.getElementById("leaderClasses").setAttribute("class", "");
		}*///Dropddown Hider Attempt 2
	
	

    //errMsg = grab("errors");

    /*function makeSelect(){
     var formTag = document.getElementsByTagName("form"),
     selectLi = grab("select"),
     makeSelect = document.createElement("select");
     makeSelect.setAttribute("id", "weapons");
     for(var i = 0, j = weaponType.length; i < j; i++){
     var makeOption = document.createElement("option");
     var optText = weaponType[i];
     makeOption.setAttribute("value", optText);
     makeOption.innerHTML = optText;
     makeSelect.appendChild(makeOption);
     }
     selectLi.appendChild(makeSelect);
     }*///old error function
	 
	function resetForm(){
		window.location.reload();	 
	}
	
    function getRadio(){
        var radios = document.forms[0].gender;
        for(var i = 0; i < radios.length; i++){
            if (radios[i].checked){
                var genderValue = radios[i].value;
            }
        }
    }//find radio value

    function toggleControls(n){
     switch(n){
         case "on":
         grab("addCharacter").style.display = "none";
         grab('clearData').style.display = "inline";
         grab("displayData").style.display = "none";
         grab("addNew").style.display = "inline";
         break;
         case "off":
         grab("addCharacter").style.display = "block";
         grab('clearData').style.display = "inline";
         grab("displayData").style.display = "inline";
         grab("addNew").style.display = "none";
         grab("items").style.display = "none";
         break;
         default:
         return false;
        }
     }// controls to toggle links on and off

    /*function validate(e){
         var getWeaponName = grab("wn");
         var getWeaponCategory = grab("weapons");

         errMsg.innerHTML = "";
         getWeaponName.style.border = "1px solid black";
         getWeaponCategory.style.border = "1px solid black";

         var messageArray = [];

         if(getWeaponName.value === ""){
             var weaponNameError = "Please enter the weapon's name.";
             getWeaponName.style.border = "2px solid red";
             messageArray.push(weaponNameError);
         }

         if(getWeaponCategory.value === "--Weapon Category--"){
             var weaponCategoryError = "Please choose a weapon category.";
             getWeaponCategory.style.border = "2px solid red";
             messageArray.push(weaponCategoryError);
         }

         if(messageArray.length >= 1){
             for(var i = 0, j = messageArray.length; i < j; i++){
                 var text = document.createElement("li");
                 text.innerHTML = messageArray[i];
                 errMsg.appendChild(text);
             }
                 e.preventDefault();
                 return false;
             } else {
                 storeData(this.key);
             }
     }*///old validate function

    function storeData(key){
        if(!key){
            var id = Math.floor(Math.random()*100000001);
        } else {
            id = key;
        }
        getRadio();
        var item = {};
        item.level = ["Level:", grab("level").value];
        item.role = ["Role:", grab("role").value];
		item.characterClass = ["Class:", grab("characterClass").value];
		item.race = ["Race:", grab("race").value];
		item.characterName = ["Character Name:", grab("characterName").value];
        item.gender = ["Gender:", genderValue];
		item.height = ["Height:", grab("height").value];
		item.weight = ["Weight:", grab("weight").value];
		item.age = ["Age:", grab("age").value];
		item.alignment = ["Alignment:", grab("alignment").value];
		item.deity = ["Deity:", grab("deity").value];
        item.mannerismsAndAppearance = ["Mannerisms and Appearance:", grab("mannerismsAndAppearance").value];
        item.personalityTraits = ["Personality Traits:", grab("personalityTraits").value];
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

        grab("level").value = item.level[1];
		grab("role").value = item.role[1];
		grab("characterClass").value = item.characterClass[1];
		grab("race").value = item.race[1];
        grab("characterName").value = item.characterName[1];
        var radios = document.forms[0].gender;
        for(var i = 0; i < radios.length; i++){
            if(radios[i].value == "Male" && item.gender[1] == "Male"){
                radios[i].setAttribute("checked", "checked");
            } else if(radios[i].value == "Female" && item.gender[1] == "Female"){
                radios[i].setAttribute("checked", "checked");
            } else if(radios[i].value == "Other" && item.gender[1] == "Other"){
                radios[i].setAttribute("checked", "checked");
  			} else if(radios[i].value == "None" && item.gender[1] == "None"){
                radios[i].setAttribute("checked", "checked");
            }
        }
		grab("height").value = item.height[1];
		grab("weight").value = item.weight[1];
		grab("age").value = item.age[1];
		grab("alignment").value = item.alignment[1];
		grab("deity").value = item.deity[1];
		grab("mannerismsAndAppearance").value = item.mannerismsAndAppearance[1];
        grab("personalityTraits").value = item.personalityTraits[1];

        saveData.removeEventListener("click", storeData);

        grab("saveData").value = "Edit Weapon";
        var editSubmit = grab("saveData");

        editSubmit.addEventListener("click", validate);
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
        for(var n in json){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    }//fill local storage with test data

    function getImage(role, makeSubList){
        var imageLi = document.createElement("li");
        makeSubList.appendChild(imageLi);
        var newImage = document.createElement("img");
        var setSrc = newImage.setAttribute("src", "images/" + role + ".png");
        imageLi.appendChild(newImage);

    }//assign images to saved pieces of data

    function makeItemLinks(key, linksLi){
        var editLink = document.createElement("a");
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Character";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);

        var breakTag = document.createElement('br');
        linksLi.appendChild(breakTag);

        var deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Character";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
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
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        makeDiv.setAttribute("data-role", "page");

        var makeList = document.createElement("ul");
        makeList.setAttribute("data-role","listview");
        makeList.setAttribute("data-theme", "c");
        makeList.setAttribute("data-inset","true");
        makeList.setAttribute("data-filter", "true");

        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        grab("items").style.display = "block";
        for(var i = 0, len=localStorage.length; i < len; i++){
            var makeli = document.createElement("li");
            makeli.setAttribute("id","listele");
            var linksLi = document.createElement("div");
            linksLi.setAttribute("id","divele");
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = document.createElement("p");
            makeli.appendChild(makeSubList);
            getImage(obj.role[1], makeSubList);
            for(var n in obj){
                var makeSubli = document.createElement("div");
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0] + " " + obj[n][1];
                makeSubli.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
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
	
    saveData.addEventListener("click", validate);
	clearForm.addEventListener("click", resetForm);
    var displayData = grab("displayData");
    displayData.addEventListener("click", getData);
    var clearData = grab("clearData");
    clearData.addEventListener("click", eraseData);
});