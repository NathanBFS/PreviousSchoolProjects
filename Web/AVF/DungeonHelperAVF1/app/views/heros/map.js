function (doc) {
  if (doc._id.substr(0,5) === "hero:"){
    emit(doc._id.substr(0,5), { 
    	"dungeonName": doc.dungeonName,
        "length": doc.length,
        "levelGroup": doc.levelGroup,
        "difficulty": doc.difficulty,
        "description": doc.description
    });
  }
};