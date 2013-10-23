function (doc) {
  if (doc._id.substr(0,7) === "squire:"){
    emit(doc._id.substr(0,7), { 
    	"dungeonName": doc.dungeonName,
        "length": doc.length,
        "levelGroup": doc.levelGroup,
        "difficulty": doc.difficulty,
        "description": doc.description
    });
  }
};