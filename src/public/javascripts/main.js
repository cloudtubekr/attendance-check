function Today_time(){ //날짜 및 방과후
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    let after;
    switch(day){ //요일 숫자를 문자로
        case 0: day = '일'; break;
        case 1: day = '월'; after = '야간 자율 학습'; break;
        case 2: day = '화'; after = '야간 자율 학습'; break;
        case 3: day = '수'; after = '전동 동아리'; break;
        case 4: day = '목'; after = '야간 자율 학습'; break;
        case 5: day = '금'; after = '전동 동아리'; break;
        case 6: day = '토'; break;
    }
    return {
        day,
        year,
        month,
        date,
        after,
    };
}
function Clock(){ //현 시간 및 교시
    let today = new Date();
    let hour = today.getHours(); //시간
    let minute = today.getMinutes(); //분
    let noon; // 0 = 오전 , 1 = 오후
    let period; //교시
    let breaktime = '쉬는 시간';
    if( hour >= 12 ){ // 오전 오후 구하기
        noon = 1
        hour -= 12;
    }
    else{
        noon = 0;
    }
    if(noon == 0){ // 교시구하기
        switch(hour){
            case 8: if( minute >= 20 && minute < 40 ) period = '조회시간';
                    else if( minute >= 40 ) period = '1교시';
                    else period = '등교전'
                break;
            case 9: if( minute >= 25 && minute < 35 ) period = breaktime;
                    else if( minute >= 35 ) period = '2교시';
                    else period = '1교시';
                break;
            case 10: if( minute >= 20 && minute < 30) period = breaktime;
                    else if( minute >= 30 ) period = '3교시';
                    else period = '2교시';
                break;
            case 11: if( minute >= 15 && minute < 25) period = breaktime;
                    else if( minute >= 25 ) period = '4교시';
                    else period = '3교시';
                break;
            default: period = '등교전';
                break;
        }
    }
    else {
        switch(hour){
            case 0: if(minute >= 10){ period = '점심 시간'; hour += 12;}
                    else period = '4교시';
                break;
            case 1: if(minute >= 20 && minute < 30) period = breaktime; 
                    else if( minute >= 30) period = '5교시';
                    else period = '점심 시간';
                break;
            case 2: if(minute >= 20 && minute < 30) period = breaktime;
                    else if( minute >= 30) period = '6교시'; 
                    else period = '5교시';
                break;
            case 3: if(minute >= 20 && minute < 30) period = breaktime; 
                    else if( minute >= 30) period = '7교시';
                    else period = '6교시';
                break;
            case 4: if(minute >= 20 && minute < 30) period = breaktime; 
                    else if( minute >= 30) period = '8교시';
                    else period = '7교시';
                break;
            case 5: if(minute >= 20) period = '저녁 시간'; 
                    else period = '8교시';
                break;
            case 6: if(minute >= 40 ) period = '9교시';
                    else period = '저녁 시간';
                break;
            case 7: if(minute >= 30 && minute < 40) period = breaktime; 
                    else if( minute >= 40) period = '10교시';
                    else period = '9교시';
                break;
            case 8: if(minute >= 30) period = '하교';  
                    else period = '10교시';
                break;
            default: period = '하교';
                break;
        }
    }
    if( noon == 1){ // 숫자를 문자로
        noon = '오후 ';
    }
    else{
        noon = '오전 ';
    }
    return{
        hour,
        minute,
        noon,
        period,
    };
}