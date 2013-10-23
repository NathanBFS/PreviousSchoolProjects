function (doc) {
  if (doc._id.substr(0,8) === "dungeon:"){
    emit(doc._id.substr(8), { 
    	"dungeonName": doc.dungeonName,
        "length": doc.length,
        "levelGroup": doc.levelGroup,
        "difficulty": doc.difficulty,
        "description": doc.description
    });
  }
};