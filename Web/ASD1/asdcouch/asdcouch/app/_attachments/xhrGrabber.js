$('#xhrCharacterView').live('pageinit', function(){
    //JSON
    $('#jsonChar').on('click',function(){
        $.ajax({
            url: '/data.json',
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
        $('#emptyableLi').remove();
        $('#xhrCharList').listview('refresh');
        console.log($('#xhrCharList'));
    });
    //XML
     var parseXML = function(xml){
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
            url: "/data.xml",
            dataType: "xml",
            success: parseXML
        });
    });
    //CSV
    $('#csvChar').on("click", function(){
        $.ajax({
            url: '/data.csv',
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