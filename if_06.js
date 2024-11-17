function convertScoreToGradeWithPlusAndMinus(score) {
    if(score > 100 || score <0){
        return 'INVALID SCORE';
    } else if(score <= 100 && score >= 90){
        if(score >=98){
            return 'A+'
        } else if (score >= 93) {
            return 'A'
        } else {
            return 'A-'
        }
    } else if (score <= 89 && score >= 80){
        if(score >=88){
            return 'B+'
        } else if (score >= 83) {
            return 'B'
        } else {
            return 'B-'
        }
    } else if (score <= 79 && score >= 70){
        if(score >=78){
            return 'C+'
        } else if (score >= 73) {
            return 'C'
        } else {
            return 'C-'
        };
    } else if (score <= 69 && score >= 60){
        if(score >=68){
            return 'D+'
        } else if (score >= 63) {
            return 'D'
        } else {
            return 'D-'
        }
    } else if (score <= 59 && score >= 50){
        if(score >=58){
            return 'F+'
        } else if (score >= 53) {
            return 'F-'
        } else {
            return 'F'
        }
    }
}
let output = convertScoreToGradeWithPlusAndMinus(94);
console.log(output);

/*
 * let score = 98
 * let null = score / 10
 * let num0 = Math.floor(null)
 * let num1 = score - num0
 */  
//  let score = n;
//  let null = score / 10;
//  let num0 = Math.floor(null);
//  let num1 = score - num0
//-----------------------------------
// 훨씬 간결한 코드 노션페이지 참고**꼭 보셈**
 