
function introduction (name,) {
    return (`Hi, my name is ${name}.`);
}
console.log(introduction("Aki"));

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  console.log(introductionWithLanguage("Aki", "Javascript"));

  function introductionWithLanguageOptional(firstName, language) {
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
  }
  console.log(introductionWithLanguageOptional("Gracie", "JavaScript"));

  function introductionWithLanguageOptional(firstName="User", language="JavaScript") {
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
  }
  console.log(introductionWithLanguageOptional("Gracie", "JavaScript"));