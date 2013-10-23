/********************************Dungeon XHR*******************************************/
$('#xhrDungeonView').live('pageinit', function(){
    //JSON
    $('#jsonDun').on('click',function(){
        $.ajax({
            url: 'xhrFiles/ddata.json',
            type: 'GET',
            dataType: 'json',
            success: function(jsonFill){
                console.log('JSON Dungeon: ', jsonFill);
                for(var i = 0, length=jsonFill.dungeons.length; i < length; i++){
                    var item = jsonFill.dungeons[i];
                    console.log('Dungeon is: ', item);
                    $('#jsonDun').after(' ' +
                        '<li class="ui-li ui-li-static ui-body-a">' +
                        '<p>Dungeon Name: ' +
                        item.dungeonName[1] +
                        '<br>' +
                        'Length: ' +
                        item.length[1] +
                        '<br>' +
                        'Level Group: ' +
                        item.levelGroup[1] +
                        '<br>' +
                        'Difficulty: ' +
                        item.difficulty[1] +
                        '<br>' +
                        'Description: ' +
                        item.description[1] +
                        '</p></li>'
                    );
                }
            }
        });
        $('#emptyableDLi').remove();
        $('#xhrDunList').listview('refresh');
        console.log($('#xhrDunList'));
    });
    //XML
    var parseDXML = function(xml){
        console.log(xml);
        $(xml).find("dungeon").each(function(){
            var dunList = {};
            dunList.dungeonName = $(this).find("dungeonName").text();
            dunList.length = $(this).find("length").text();
            dunList.levelGroup = $(this).find("levelGroup").text();
            dunList.difficulty = $(this).find("difficulty").text();
            dunList.description = $(this).find("description").text();
            console.log(dunList);

            $('#xmlDun').after(' '+
                '<li class="ui-li ui-li-static ui-body-a">' +
                '<p>Dungeon Name: ' +
                dunList.dungeonName +
                '<br>' +
                'Length: ' +
                dunList.length +
                '<br>' +
                'Level Group: ' +
                dunList.levelGroup +
                '<br>' +
                'Difficulty: ' +
                dunList.difficulty +
                '<br>' +
                'Description: ' +
                dunList.description +
                '</p></li>');
        });
    };

    $('#xmlDun').on("click",function(){
        $.ajax({
            type: "GET",
            url: "xhrFiles/ddata.xml",
            dataType: "xml",
            success: parseDXML
        });
    });
    //CSV
    $('#csvDun').on("click", function(){
        $.ajax({
            url: 'xhrFiles/ddata.csv',
            type: 'GET',
            dataType: 'text',
            success: function(csvData){
                console.log("CSV Dungeons: ", csvData);
                var items = csvData.split("\n");
                for(var j=1; j< items.length; j++){
                    var row = items[j];
                    var columns = row.split(",");

                    console.log('CSV is: ', columns);
                    $('#csvDun').after(' ' +
                        '<li class="ui-li ui-li-static ui-body-a">' +
                        '<p>Dungeon Name: ' + columns[0] + '<br>' +
                        'Length: ' + columns[1] + '<br>' +
                        'Level Group: ' + columns[2] + '<br>' +
                        'Difficulty: ' + columns[3] + '<br>' +
                        'Description: ' + columns[4] + '<br>' +
                        '</p></li>');
                }
            }
        });
    });
    $('#removeList').remove();
});

/********************************Character XHR*******************************************/
$('#xhrCharacterView').live('pageinit', function(){
    //JSON
    $('#jsonChar').on('click',function(){
        $.ajax({
            url: 'xhrFiles/cdata.json',
            type: 'GET',
            dataType: 'json',
            success: function(jsonFill){
                console.log('JSON Characters: ', jsonFill);
                for(var i = 0, length=jsonFill.characters.length; i < length; i++){
                    var item = jsonFill.characters[i];
                    console.log('Character is: ', item);
                    $('#jsonChar').after(' ' +
                        '<li class="ui-li ui-li-static ui-body-a">' +
                        '<p>Level: ' +
                        item.level[1] +
                        '<br>' +
                        'Role: ' +
                        item.role[1] +
                        '<br>' +
                        'Class: ' +
                        item.characterClass[1] +
                        '<br>' +
                        'Race: ' +
                        item.race[1] +
                        '<br>' +
                        'Name: ' +
                        item.characterName[1] +
                        '<br>' +
                        'Gender: ' +
                        item.gender[1] +
                        '<br>' +
                        'Height: ' +
                        item.height[1] +
                        '<br>' +
                        'Weight: ' +
                        item.weight[1] +
                        '<br>' +
                        'Age: ' +
                        item.age[1] +
                        '<br>' +
                        'Alignment: ' +
                        item.alignment[1] +
                        '<br>' +
                        'Deity: ' +
                        item.deity[1] +
                        '<br>' +
                        'Mannerisms and Appearance: ' +
                        item.mannerismsAndAppearance[1] +
                        '<br>' +
                        'Personality Traits: ' +
                        item.personalityTraits[1] +
                        '</p></li>'
                    );
                }
            }
        });
        $('#emptyableCLi').remove();
        $('#xhrCharList').listview('refresh');
        console.log($('#xhrCharList'));
    });
    //XML
     var parseCXML = function(xml){
        console.log(xml);
        $(xml).find("character").each(function(){
            var charList = {};
            charList.level = $(this).find("level").text();
            charList.role = $(this).find("role").text();
            charList.characterClass = $(this).find("characterClass").text();
            charList.race = $(this).find("race").text();
            charList.characterName = $(this).find("characterName").text();
            charList.gender = $(this).find("gender").text();
            charList.height = $(this).find("height").text();
            charList.weight = $(this).find("weight").text();
            charList.age = $(this).find("age").text();
            charList.alignment = $(this).find("alignment").text();
            charList.deity = $(this).find("deity").text();
            charList.mannerismsAndAppearance = $(this).find("mannerismsAndAppearance").text();
            charList.personalityTraits = $(this).find("personalityTraits").text();
            console.log(charList);

            $('#xmlChar').after(' '+
                '<li class="ui-li ui-li-static ui-body-a">' +
                '<p>Level: ' +
                charList.level +
                '<br>' +
                'Role: ' +
                charList.role +
                '<br>' +
                'Class: ' +
                charList.characterClass +
                '<br>' +
                'Race: ' +
                charList.race +
                '<br>' +
                'Name: ' +
                charList.characterName +
                '<br>' +
                'Gender: ' +
                charList.gender +
                '<br>' +
                'Height: ' +
                charList.height +
                '<br>' +
                'Weight: ' +
                charList.weight +
                '<br>' +
                'Age: ' +
                charList.age +
                '<br>' +
                'Alignment: ' +
                charList.alignment +
                '<br>' +
                'Deity: ' +
                charList.deity +
                '<br>' +
                'Mannerisms and Appearance: ' +
                charList.mannerismsAndAppearance +
                '<br>' +
                'Personality Traits: ' +
                charList.personalityTraits +
                '</p></li>');
        });
    };

    $('#xmlChar').on("click",function(){
        $.ajax({
            type: "GET",
            url: "xhrFiles/cdata.xml",
            dataType: "xml",
            success: parseCXML
        });
    });
    //CSV
    $('#csvChar').on("click", function(){
        $.ajax({
            url: 'xhrFiles/cdata.csv',
            type: 'GET',
            dataType: 'text',
            success: function(csvData){
                console.log("CSV Characters: ", csvData);
                var items = csvData.split("\n");
                for(var j=1; j< items.length; j++){
                    var row = items[j];
                    var columns = row.split(",");
                    
                    console.log('CSV is: ', columns);
                    $('#csvChar').after(' ' +
                        '<li class="ui-li ui-li-static ui-body-a">' +
                        '<p>Level: ' + columns[0] + '<br>' +
                        'Role: ' + columns[1] + '<br>' +
                        'Class: ' + columns[2] + '<br>' +
                        'Race: ' + columns[3] + '<br>' +
                        'Name: ' + columns[4] + '<br>' +
                        'Gender: ' + columns[5] + '<br>' +
                        'Height: ' + columns[6] + '<br>' +
                        'Weight: ' + columns[7] + '<br>' +
                        'Age: ' + columns[8] + '<br>' +
                        'Alignment: ' + columns[9] + '<br>' +
                        'Deity: ' + columns[10] + '<br>' +
                        'Mannerisms and Appearance: ' + columns[11] + '<br>' +
                        'Personality Traits: ' + columns[12] +
                        '</p></li>');
                }
            }
        });    
    });
    $('#removeList').remove();
});