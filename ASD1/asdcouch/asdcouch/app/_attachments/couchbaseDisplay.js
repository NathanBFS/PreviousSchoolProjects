$('#characterBrowse').live('pageinit', function(){
    //JSON
    $('#browseStrikerChars').on('click',function(){
        $.ajax({
            url: '_view/strikers',
            dataType: 'json',
            success: function(data){
                $.each(data.rows, function (index, striker){
                    var level = striker.value.level;
                    var role = striker.value.role;
                    var characterClass = striker.value.characterClass;
                    var race = striker.value.race;
                    var characterName = striker.value.characterName;
                    var gender = striker.value.gender;
                    $('#strikerList').append(
                        $('<li>').append(
                            $('<a>').attr('href','#')
                               .text(characterClass)
                        )
                    );
                });
                $('#strikerList').listview('refresh');
            }
        });
    });
    $('#browseDefenderChars').on('click',function(){
        $.ajax({
            url: '_view/defenders',
            dataType: 'json',
            success: function(data){
                $.each(data.rows, function (index, defender){
                    var level = defender.value.level;
                    var role = defender.value.role;
                    var characterClass = defender.value.characterClass;
                    var race = defender.value.race;
                    var characterName = defender.value.characterName;
                    var gender = defender.value.gender;
                    $('#defenderList').append(
                        $('<li>').append(
                            $('<a>').attr('href','#')
                                .text(characterClass)
                        )
                    );
                });
                $('#defenderList').listview('refresh');
            }
        });
    });
    $('#browseControllerChars').on('click',function(){
        $.ajax({
            url: '_view/controllers',
            dataType: 'json',
            success: function(data){
                $.each(data.rows, function (index, controller){
                    var level = controller.value.level;
                    var role = controller.value.role;
                    var characterClass = controller.value.characterClass;
                    var race = controller.value.race;
                    var characterName = controller.value.characterName;
                    var gender = controller.value.gender;
                    $('#controllerList').append(
                        $('<li>').append(
                            $('<a>').attr('href','#')
                                .text(characterClass)
                        )
                    );
                });
                $('#controllerList').listview('refresh');
            }
        });
    });
    $('#browseLeaderChars').on('click',function(){
        $.ajax({
            url: '_view/leaders',
            dataType: 'json',
            success: function(data){
                $.each(data.rows, function (index, leader){
                    var level = leader.value.level;
                    var role = leader.value.role;
                    var characterClass = leader.value.characterClass;
                    var race = leader.value.race;
                    var characterName = leader.value.characterName;
                    var gender = leader.value.gender;
                    $('#leaderList').append(
                        $('<li>').append(
                           $('<a>').attr('href','#')
                                .text(characterClass)
                        )
                    );
                });
                $('#leaderList').listview('refresh');
            }
        });
    });
});






