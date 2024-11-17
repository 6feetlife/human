function convertScoreToGrade(score) {
    if (score >=90 && score <=100){
        return 'A';
    } else if (score >=80 && score <=89){
        return 'B';
    } else if (score >=70 && score <= 79){
        return 'C';
    } else if (score >= 60 && score <= 69){
        return 'D';
    } else if (score >= 0 && score <= 59){
        return 'F';
    } else if (score <0 || score >100){
        //그냥 else로 간단하게 표현하는게 더 깔끔하다.
        return 'INVALID SCORE';
    }
  }
  let output = convertScoreToGrade(101);
  console.log(output);
  /**
   * } else if (score <0 || score >100){
        return 'INVALID SCORE';
    } else if (score >=70)
     더 큰 범위를 대전제로 위로 올리고
     그 하위에 작은 범위의 조건식들을 배열해서
     코드를 간결하게 짠다.
   */