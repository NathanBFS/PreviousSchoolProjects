$('#writeAndroidFile').bind("click", function(){

    function androidWriteFail(error) {
        alert(error.code);
    }

    function gotAndroidFileWriter(writer) {
        writer.onwriteend = function(evt) {
            alert("Contents of file now 'All your base are belong to us!'");
            writer.truncate(13);
            writer.onwriteend = function(evt) {
                alert("Contents of file now 'All your base'");
                writer.seek(4);
                writer.write("All your base BASE!");
                writer.onwriteend = function(evt){
                    alert("Contents of file now 'All your base BASE!'");
                };
            };
        };
        writer.write("All your base are belong to us!");
    }

    function gotAndroidFileEntry(fileEntry) {
        fileEntry.createWriter(gotAndroidFileWriter, androidWriteFail);
    }

    function gotAndroidFilesystem(fileSystem) {
        fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotAndroidFileEntry, androidWriteFail);
    }

    function onAndroidDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotAndroidFilesystem, androidWriteFail);
    }

    document.addEventListener("deviceready", onAndroidDeviceReady, false);

});

$('#readAndroidFile').bind("click", function(){

    function androidReadFail(evt) {
        alert(evt.target.error.code);
    }

    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            alert(evt.target.result);
        };
        reader.readAsText(file);
    }

    function gotAndroidFile(file){
        readAsText(file);
    }

    function gotAndroidFileEntry(fileEntry) {
        fileEntry.file(gotAndroidFile, androidReadFail);
    }

    function gotAndroidFS(fileSystem) {
        fileSystem.root.getFile("readme.txt", null, gotAndroidFileEntry, androidReadFail);
    }

    function onAndroidDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotAndroidFS, androidReadFail);
    }

    document.addEventListener("deviceready", onAndroidDeviceReady, false);

});

$('#writeiOSFile').bind("click", function(){

    function iOSWriteFail(error) {
        alert(error.code);
    }

    function gotiOSFileWriter(writer) {
        writer.onwriteend = function(evt) {
            alert("Contents of file now 'All your base are belong to us!'");
            writer.truncate(13);
            writer.onwriteend = function(evt) {
                alert("Contents of file now 'All your base'");
                writer.seek(4);
                writer.write("All your base BASE!");
                writer.onwriteend = function(evt){
                    alert("Contents of file now 'All your base BASE!'");
                };
            };
        };
        writer.write("All your base are belong to us!");
    }

    function gotiOSFileEntry(fileEntry) {
        fileEntry.createWriter(gotiOSFileWriter, iOSWriteFail);
    }

    function gotiOSFilesystem(fileSystem) {
        fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotiOSFileEntry, iOSWriteFail);
    }

    function oniOSDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotiOSFilesystem, iOSWriteFail);
    }

    document.addEventListener("deviceready", oniOSDeviceReady, false);

});

$('#readiOSFile').bind("click", function(){

    function iOSReadFail(evt) {
        alert(evt.target.error.code);
    }

    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            alert(evt.target.result);
        };
        reader.readAsText(file);
    }

    function gotiOSFile(file){
        readAsText(file);
    }

    function gotiOSFileEntry(fileEntry) {
        fileEntry.file(gotiOSFile, iOSReadFail);
    }

    function gotiOSFS(fileSystem) {
        fileSystem.root.getFile("readme.txt", null, gotiOSFileEntry, iOSReadFail);
    }

    function oniOSDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotiOSFS, iOSReadFail);
    }

    document.addEventListener("deviceready", oniOSDeviceReady, false);

});