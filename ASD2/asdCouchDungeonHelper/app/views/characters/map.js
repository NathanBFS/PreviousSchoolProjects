function (doc) {
  if (doc._id){
    emit(doc._id, { 
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