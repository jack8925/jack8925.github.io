	
function currentTime(){
	
	var $now = new Date,
	    $nowY = $now.getFullYear(),
	    $nowM = $now.getMonth(),
	    $nowD = $now.getDate(),
		$nowW = $now.getDay(),
	    $nowH = $now.getHours(),
	    $nowI = $now.getMinutes(),
	    $nowS = $now.getSeconds();
		
	if($nowM<10){$nowM = "0" + $nowM};		
	if($nowD<10){$nowD = "0" + $nowD};		
	if($nowH<10){$nowH = "0" + $nowH};		
	if($nowI<10){$nowI = "0" + $nowI};		
	if($nowS<10){$nowS = "0" + $nowS};
	
	switch($nowW){
		case 0:$nowW="日"; break;
		case 1:$nowW="一"; break;
		case 2:$nowW="二"; break;
		case 3:$nowW="三"; break;
		case 4:$nowW="四"; break;
		case 5:$nowW="五"; break;
		case 6:$nowW="六"; break;
		default:$nowW="Error"; break;
	}
	
	
	var	$time = "現在時間 " + $nowY+ "年 " + $nowM + "月 "+ $nowD + "日 "+ "星期" + $nowW +"  " + $nowH + ":" + $nowI + ":" + $nowS;
		
	
	document.getElementById("timearea").innerHTML=$time;
	setInterval(currentTime, 1000);
	
	
	
}
