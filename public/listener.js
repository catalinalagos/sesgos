//listenersk("source1");


function listenersk(sourceX) {
  //define where to get the source and place the result
  const source = document.getElementById(sourceX);
  // --------------------- LISTENING LOOP ---------------------
  const inputHandler = function (e) {
    words = e.target.value.split(' '); //to store tokens in an array
    wordsStr = e.target.value; //to save the string
    wordsStr = wordsStr.toLowerCase();

    //RESET ARRAYS AND DICTIONARIES
    wordsfinal = [];
    allStoredEmotions = [];
    dictionaryEmotions = {};
    allStoredSelf = [];
    dictionarySelf = {};
    allStoredEnv = [];
    dictionaryEnv = {};
    codesColors = [];
    codesSelf = [];
    codesEnv = [];

    // --------------------- CHECK KEYWORDS --------------------
    //all keywords detected will be stored in an array and a dictionary (for frequency)
    //checkKeywords(allKeywordsArray); //fills allStoredKeywords and dictionaryKeywords
    checkKeywords(allKeywordsArray[0], allStoredEmotions, dictionaryEmotions); //is checking the emotionsList 
    checkKeywords(allKeywordsArray[1], allStoredSelf, dictionarySelf); //checking self
    checkKeywords(allKeywordsArray[2], allStoredEnv, dictionaryEnv); //checking entities
    // allStoredKeywords is now populated with all keywords

    //function analyzeKeywords populates target arrays named codesSomething
    //analyzeKeywords(arrayofKeywordsDetected,originalList,targetArray,existingDict) -- 4 parameters
    analyzeKeywords(allStoredEmotions, allEmotionsLists, codesColors, dictionaryEmotions); //for emotions
    analyzeKeywords(allStoredSelf, allSelfLists, codesSelf, dictionarySelf); //for self
    analyzeKeywords(allStoredEnv, allEnvLists, codesEnv, dictionaryEnv); //for environment
    colorsArray = codesColors;
    //PERSONAL FUNCTIONS

  } //End of listening

  source.addEventListener('input', inputHandler);
  source.addEventListener('propertychange', inputHandler);

}