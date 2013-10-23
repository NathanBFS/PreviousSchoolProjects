function (doc) {
  if (doc._id){
    emit(doc._id, { 
    	"dungeonName": doc.dungeonName,
        "length": doc.length,
        "levelGroup": doc.levelGroup,
        "difficulty": doc.difficulty,
        "description": doc.description
    });
  }
};