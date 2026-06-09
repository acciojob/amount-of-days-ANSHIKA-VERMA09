//your JS code here. If required.
function daysOfYear(year){
	if((year%400==0 )||( year%4==0 && year%100!=0)){
		console.log(366);
	}
	else{
		console.log(365);
	}
}