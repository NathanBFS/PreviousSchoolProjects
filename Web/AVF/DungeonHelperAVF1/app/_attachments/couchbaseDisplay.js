$('#dungeonBrowse').live('pageinit', function(){
    //JSON
    $('#browseSquireDuns').on('click',function(){
        $.ajax({
            url: '_view/squires',
            dataType: 'json',
            success: function(data){
                $.each(data.rows, function (index, squire){
                    var dungeonName = squire.value.dungeonName;
                    var length = squire.value.length;
                    var levelGroup = squire.value.levelGroup;
                    var difficulty = squire.value.difficulty;
                    var description = squire.value.description;
                    $('#squireList').append(
                        $('<li>').append(
                            $('<a>').attr('href','#')
                                .text(dungeonName)
                        )
                    );
                });
                $('#squireList').listview('refresh');
            }
        });
    });
    $('#browseKnightDuns').on('click',function(){
        $.ajax({
            url: '_view/knights',
            dataType: 'json',
            success: function(data){
                $.each(data.rows, function (index, knight){
                    var dungeonName = knight.value.dungeonName;
                    var length = knight.value.length;
                    var levelGroup = knight.value.levelGroup;
                    var difficulty = knight.value.difficulty;
                    var description = knight.value.description;
                    $('#knightList').append(
                        $('<li>').append(
                            $('<a>').attr('href','#')
                                .text(dungeonName)
                        )
                    );
                });
                $('#knightList').listview('refresh');
            }
        });
    });
    $('#browseMasterDuns').on('click',function(){
        $.ajax({
            url: '_view/masters',
            dataType: 'json',
            success: function(data){
                $.each(data.rows, function (index, master){
                    var dungeonName = master.value.dungeonName;
                    var length = master.value.length;
                    var levelGroup = master.value.levelGroup;
                    var difficulty = master.value.difficulty;
                    var description = master.value.description;
                    $('#masterList').append(
                        $('<li>').append(
                            $('<a>').attr('href','#')
                                .text(dungeonName)
                        )
                    );
                });
                $('#masterList').listview('refresh');
            }
        });
    });
    $('#browseHeroDuns').on('click',function(){
        $.ajax({
            url: '_view/heros',
            dataType: 'json',
            success: function(data){
                $.each(data.rows, function (index, hero){
                    var dungeonName = hero.value.dungeonName;
                    var length = hero.value.length;
                    var levelGroup = hero.value.levelGroup;
                    var difficulty = hero.value.difficulty;
                    var description = hero.value.description;
                    $('#heroList').append(
                        $('<li>').append(
                           $('<a>').attr('href','#')
                                .text(dungeonName)
                        )
                    );
                });
                $('#heroList').listview('refresh');
            }
        });
    });
});






