function (doc) {
  if (doc._id.substr(0,10) === "character:"){
    emit(doc._id.substr(10), { 
    	"level": doc.level,
        "role": doc.role,
        "characterClass": doc.characterClass,
        "race": doc.race,
        "characterName": doc.characterName,
        "gender": doc.gender,
        "height":doc.height,
        "weight":doc.weight,
        "age":doc.age,
        "alignment":doc.alignment,
        "deity":doc.deity,
        "mannerismsAndAppearance":doc.mannerismsAndAppearance,
        "personalityTraits":doc.personalityTraits
    });
  }
};