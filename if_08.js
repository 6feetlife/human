function findShortestOfThreeWords(word1, word2, word3) {
    // TODO: 여기에 코드를 작성합니다.
    let currentShortestWord = word1;
    if(currentShortestWord.length > word2.length){
        currentShortestWord = word2;
    }
    //currentShortestWord에는
    //word1, word2중 더 짧은 단어가 들어옴
    if(currentShortestWord.length > word3.length){
        currentShortestWord = word3;
    }
}
