/*
 Nathan Buth
 07-04-2012
 Project 1
 AVF 1207
 */
    $('#dungeonForm').on('pageinit', function () {
        console.log("Dungeon Form loaded.");

        var saveDunData = $("#saveDunData");//variables

        var storeDunData = function (){

            console.log("Storing Dungeon.");

            var newDungeon = {'_id':"dungeon:"+$("#difficulty").val().toLowerCase() + ":" + $("#dungeonName").val().toLowerCase()};

            newDungeon.dungeonName = $('#dungeonName').val();
            newDungeon.length = $('#length').val();
            newDungeon.levelGroup = $('#levelGroup').val();
            newDungeon.difficulty = $('#difficulty').val();
            newDungeon.description = $('#description').val();
            console.log(newDungeon);

            $.couch.db('dungeonhelperavf1').saveDoc(newDungeon, {
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

        //$("#dungeonView").html("");

        $.ajax({
            url: '_view/dungeons',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                console.log("Beware, I live!", data);
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
    $('#addCharacter').on('pageinit', function () {
        console.log("Character Form loaded.");

        var saveCharData = $("#saveCharData");//variables

        var storeCharData = function (){

            console.log("Storing Character.");

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
            console.log(newCharacter);

            $.couch.db('dungeonhelperavf1').saveDoc(newCharacter, {
                success: function(data) {
                    console.log("Character Saved!");
                },
                error: function(status) {
                    console.log(status);
                }
            });
            alert("Character saved successfully!");

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

        //$("#characterView").html("");

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
//Character Form Javascript
