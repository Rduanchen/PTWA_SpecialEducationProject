/**
 * 檢查答案是否正確。
 * 
 * @param {String} iftrue 第一個加數。
 * @param {boolean} response 第二個加數。
 */
export function CheckTrueFalseAnswer(answer,response){
    if(answer == response){
        return true;
    }
    else{
        return false;
    }
}
//for TrueFalseGame SelectGame NumberInputGame Only