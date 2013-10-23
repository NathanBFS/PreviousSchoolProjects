function(doc) {
  if (doc._id.substr(0,9) === "defender:"){
    emit(doc._id, { 
    	"level": doc.level,
        "role": doc.role,
        "characterClass": doc.characterClass,
        "race": doc.race,
        "characterName": doc.characterName,
        "gender": doc.gender
    });
  }
};