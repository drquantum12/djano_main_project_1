const qId = ['#q_1','#q_2','#q_3','#q_4','#q_5','#q_6'];
var n =0;
$('#next').click(function(){
    $(qId[n]).css('display','none');
    n = n+1;
    if (n>5){
        $('#final').css('display','flex');
        $('#next').css('display','none');
        $('#submit').css('display','block');
    }
    else{
    $(qId[n]).css('display','block');
    }
});