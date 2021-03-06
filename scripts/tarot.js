function card(name, description, image){
	this.name = name;
	this.description = description;
	this.image = image;
} 
var numCombination = [22,3,29,6,32,52,41,50,40,7,37,2,45,33,13,41,12,18,25,38,7,44,26,32,50,28,48,38,8,17,29,30,11,16,47,40,25,11,46,38,8,31,24,23,47,50,21,39,32,49,46,48,15,23,6,5,1,46,20,16,10,12,4,13,42,52,18,17,11,44,36,35,51,42,15,45,48,33,37,5,36,44,49,41,34,35,9,42,14,1,25,27,8,47,31,45,24,21,17,39,16,27,2,34,6,26,43,1,30,19,13,22,40,31,12,3,7,37,52,14,20,34,43,29,21,4,10,2,51,24,43,33,9,28,51,23,26,10,36,20,27,5,15,4,3,39,19,28,9,14,30,18,19,22,35,49];

/*function findCard(){
	var numberFir = parseInt(document.getElementById('birthYear').value);
	var numberSec = parseInt(document.getElementById('birthMonth').value);
	var numberThi = parseInt(document.getElementById('birthDay').value);
	var sum = numberFir+numberSec+numThi-1924;
	var cardNum = numCombination[sum];
	document.getElementById('totalid').textContent = total;
}*/

var deck = [
	new card('創造傻瓜', '創造傻瓜說：「我們隨時都在創造，我們可以從每件事、每個人身上創造出一些傻傻好笑的東西呢~」','1'),
	new card('眼淚傻瓜', '眼淚傻瓜說：「我們想哭就會大哭，想笑就會大笑，但我們的原則是，要哭就哭多一點！不要客氣！」','2'),
	new card('行動傻瓜', '行動傻瓜說：「我們做事情才不會怕，因為我們根本不會想太多，越想就越怕啊，不想就不會怕了，哈哈哈~」','3'),
	new card('慶祝傻瓜', '慶祝傻瓜說：「我們超會讓自己開心的，因為我們什麼都慶祝，成功也慶祝、失敗也慶祝~而且慶祝失敗還更有趣呢！」','4'),
	new card('忘掉傻瓜', '忘掉傻瓜說：「我們很得意自己超會忘掉事情的，因為我們的腦袋很小，只夠裝快樂的事啊哈哈~」','5'),
	new card('非二傻瓜', '非二傻瓜說：「我們從不去想對不對，因為本來就沒有一直都對的東西啊，我們想要過得好玩，「對」又不好玩！」','6'),
	new card('無知傻瓜', '無知傻瓜說：「我們很天真，我們很無知，但是我們很快樂！」','7'),
	new card('輕鬆傻瓜', '輕鬆傻瓜說：「我們才不為過去感傷呢，我們享受現在每一刻的快樂，因為我們要連過去沒有享受到的一起享受回來！」','8'),
	new card('呼吸傻瓜', '呼吸傻瓜說：「我們熱愛大口呼吸！因為呼吸好快樂喔！做幾個深呼吸，慢慢好好呼吸，就會馬上變放鬆與快樂耶！」','9'),
	new card('犯錯傻瓜', '犯錯傻瓜說：「偷偷告訴你…我們每天都在犯錯，但我們享受犯錯，因為犯錯才能一直學到新東西，有錯就改就好啦！」','10'),
	new card('真實傻瓜', '真實傻瓜說：「我們最喜歡做真實的自己了，想就想，不想就不想，因為做自己最輕鬆啊，要一直假裝好累喔~」','11'),
	new card('放空傻瓜', '放空傻瓜說：「喔天啊！放空的感覺真是太棒了！我們愛死放掉一切的感覺了，好自由好輕鬆啊~哈~」','12'),
	new card('希望傻瓜', '希望傻瓜說：「我們隨時隨地都充滿希望，對未來充滿希望、對自己充滿希望、對世界充滿希望，傻傻的希望著，好幸福喔~」','13'),
	new card('完美傻瓜', '完美傻瓜說：「我們不挑毛病，我們覺得自己原本的樣子就已經夠完美了！這個世界也好美喔，有什麼好煩惱的呢~」','14'),
	new card('休息傻瓜', '休息傻瓜說：「我們超會找時間休息的耶，我們超會暫停忙碌的事情，因為休息好放鬆，人生就是要來享受休息的啊~」','15'),
	new card('直覺傻瓜', '直覺傻瓜說：「我們常常在傾聽自己心裡的聲音，感受來自身體的訊息，因此我們總是活在自己想要的生活裡，好開心喔~」','16'),
	new card('感受傻瓜', '感受傻瓜說：「我們很重視自己的感覺，我們很會感覺自己所需要的是什麼，讓心告訴我們該如何前進！」','17'),
	new card('熱愛傻瓜', '熱愛傻瓜說：「我們很愛做自己喜歡的事，做真正喜歡的事好快樂喔~我們才不管別人會怎麼看我們呢！」','18'),
	new card('停壓傻瓜', '停壓傻瓜說：「我們從來都沒有壓力，因為我們從來不勉強自己，而也沒有人勉強的了我們，哈哈哈！」','19'),
	new card('平靜傻瓜', '平靜傻瓜說：「我們喜歡感受平靜，平靜為我們帶來喜悅，我們要的不多，一片大自然與一朵小花就讓我們好開心喔~」','20'),
	new card('最棒傻瓜', '最棒傻瓜說：「就算是搞笑、瘋狂地跳舞、散步閒逛與發呆，我們也都要把它做到最好，因為這就是我們最棒的自己啊！」','21'),
	new card('誠實傻瓜', '誠實傻瓜說：「我們對自己超誠實的，我們不懂為什麼要假裝？如果我是這樣，那我就是這樣啊，誠實做自己最自在了~」','22'),
	new card('關心傻瓜', '關心傻瓜說：「我們常常關心周遭的人，因為如果他們不快樂的話，我們的心情也會被影響呢，大家一起快樂不是很好嗎？」','23'),
	new card('慈悲傻瓜', '慈悲傻瓜說：「我們偶爾也會出錯，但是我們不會去責備自己，我們知道對自己也要有耐心，要給自己時間才會做得更好啊！」','24'),
	new card('尊敬傻瓜', '尊敬傻瓜說：「我們尊敬每個人，就算他比我們更傻，我們認為每個人都有權利用他自己的方式傻，我們尊敬所有的傻瓜們！」','25'),
	new card('幫忙傻瓜', '幫忙傻瓜說：「我們樂於幫忙別人，也樂於請別人幫忙我們，畢竟，互相幫忙感情才會好啊，我們很享受互相支持的快樂呢~」','26'),
	new card('愛玩傻瓜', '愛玩傻瓜說：「我們超級愛玩的，我們隨時在玩、在發現生活裡的樂趣，我們	沒有花很多錢，但我們一樣玩得好開心呢~」','27'),
	new card('美好傻瓜', '美好傻瓜說：「我們每天總是迫不及待去發現各種美好的事物，當然，我們也覺得自己好美，常常想到自己就傻笑呢~」','28'),
	new card('照顧傻瓜', '照顧傻瓜說：「我們非常會照顧自己，我們感覺自己需要什麼，就會去滿足自己的需要，這不是理所當然的事嗎？」','29'),
	new card('順流傻瓜', '順流傻瓜說：「我們喜歡順著生命帶給我們的路來活，就算走錯了路，我們相信生命一定會再把我們帶回來的！」','30'),
	new card('處理傻瓜', '處理傻瓜說：「我們喜歡放鬆悠閒的過生活，但對於必須處理的問題，我們超有行動力的呢！好好解決才能真的放鬆啊！」','31'),
	new card('滿愛傻瓜', '滿愛傻瓜說：「我們最愛自己了，我們好喜歡自己，因為那好快樂，我們也好想要讓每個人都可以這麼快樂喔~」','32'),
	new card('瘋狂傻瓜', '瘋狂傻瓜說：「我們知道自己很瘋狂，既然有的東西為什麼不承認呢？現在我們可以更光明正大的瘋，生活變得好好玩喔~」','33'),
	new card('豐盛傻瓜', '豐盛傻瓜說：「我們最喜歡豐富又充滿樂趣的生活了！我們想要自己的人生是多采多姿的，就像遊樂園一樣好玩！」','34'),
	new card('放手傻瓜', '放手傻瓜說：「為什麼要緊抓不放呢？過去的就讓它們去了，還沒發生的也不用想啊，我們喜歡隨時都是輕鬆自在的，多好啊~」','35'),
	new card('經驗傻瓜', '經驗傻瓜說：「我們有時候也會痛苦與難過，但我們會讓它就盡情痛個夠！痛完後，不知道為什麼我們又可以大笑了，哈！」','36'),
	new card('清醒傻瓜', '清醒傻瓜說：「我們不喜歡麻痺自己，我們喜歡清醒有精神的去享受生活，因為這樣才能好好感受每一刻的幸福與美好啊~」','37'),
	new card('轉念傻瓜', '轉念傻瓜說：「雖然頭腦很有用，但我們可不會盲目相信它呢！如果它讓我們很痛苦的話，我們就把腦中的想法換掉就好啦！」','38'),
	new card('驚奇傻瓜', '驚奇傻瓜說：「我們總是張大眼睛去看生活裡的每個驚奇，像是每個人獨特的臉、天空湛藍的光芒，以及我們居然還活著呢！」','39'),
	new card('負責傻瓜', '負責傻瓜說：「我們每天都會好好愛自己、覺察自己，我們喜歡越變越好的感覺，因為成長本來就是自己的責任啊！」','40'),
	new card('一致傻瓜', '一致傻瓜說：「我們有想說的話就會說，覺得想做的事情就會去做，我們說到就會做到，這樣生活才會充實有意義啊！」','41'),
	new card('力量傻瓜', '力量傻瓜說：「我們可以說自己想說的、做自己想做的，也可以自由去思考任何東西，這是別人無法從我們身上拿走的呢！」','42'),
	new card('感激傻瓜', '感激傻瓜說：「我們對自己所擁有的總是充滿感謝，常在想：為什麼我們可以得到這麼多呢？這一定是來自上天的禮物啊！」','43'),
	new card('享受傻瓜', '享受傻瓜說：「我們非常會享受自己，無論是走路、吃飯、做事、沒事，我們都享受，因為享受自己隨時都可以啊！」','44'),
	new card('勇敢傻瓜', '勇敢傻瓜說：「我們有時候也會害怕，但儘管怕，我們還是會鼓起勇氣去行動，然後不知道為什麼，恐懼就漸漸不見了呢~」','45'),
	new card('向內傻瓜', '向內傻瓜說：「獨處對我們很重要，當我們有花時間自己一個人往內看看自己，很神奇，那些焦慮與忙亂就都消失了呢~」','46'),
	new card('當下傻瓜', '當下傻瓜說：「每當我們又開始心煩意亂，我們就會把自己拉回到此時此刻，然後煩惱好像就無法存在了呢！」','47'),
	new card('放慢傻瓜', '放慢傻瓜說：「我們常常刻意放慢自己，當我們把步調放慢的時候，心情就變得更平靜，好像生活也變得更順利了呢~」','48'),
	new card('全然傻瓜', '全然傻瓜說：「我們做什麼都很全然，因為我們不想留下任何遺憾啊！全然去做的感覺真的好爽快喔！」','49'),
	new card('分享傻瓜', '分享傻瓜說：「我們知道，上天送我們禮物的方式，就是透過我們去給，如果我們不去分享，我們就會錯過上天的禮物了呢~」','50'),
	new card('大笑傻瓜', '大笑傻瓜說：「我們好喜歡大笑，喜歡看各種有趣好笑的東西，常常笑到肚子痛流淚呢，生活中隨時充滿笑聲的感覺好棒喔！」','51'),
	new card('接納傻瓜', '接納傻瓜說：「我們願意接納生命本來就會有的一切，我們敞開歡迎它們，這樣就不用再花力氣去對抗它們了~好輕鬆喔~」','52'),
];
	
	/*function getRandom(num){
		var randomNumber = Math.floor(Math.random() * num);
		return randomNumber;
		
	}*/
	
	
	
	document.getElementById("draw").onclick = function(){
		//var index = getRandom(8);
		//var currentCard = deck[index];

		var numberFir = parseInt(document.getElementById('birthYear').value);
		var numberSec = parseInt(document.getElementById('birthMonth').value);
		var numberThi = parseInt(document.getElementById('birthDay').value);
		var sum = numberFir + numberSec + numberThi - 1924;
		var cardNum = numCombination[sum];
		var currentCard = deck[cardNum-1];
		var secondCard = deck[numCombination[sum+1]-1];
		var thirdCard = deck[numCombination[sum+2]-1];
		var fourthCard = deck[numCombination[sum+3]-1];
		var fifthCard = deck[numCombination[sum+4]-1];


		document.getElementById("display_cardName").innerHTML = 
		'<h2>' + currentCard.name + '</h2>' ;
		
		document.getElementById("display_cardPic").innerHTML = 
		'<img src="images/' + currentCard.image + '.gif">';

		document.getElementById("display_cardDescription").innerHTML = 
        '<p>' + currentCard.description + '</p>';
		
                document.getElementById("birthYear").value = "---";
		document.getElementById("birthMonth").value = "---";
		document.getElementById("birthDay").value = "---";
		/*
		+  '<img src="images/' + 
		currentCard.image + '.gif"><p> '+ 
		currentCard.description + '</p>';
		*/
/*
		document.getElementById("display_30").innerHTML =		'<h2>第二多的成分是：</h2><h2>' + 
		secondCard.name + '</h2>' +  '<img src="images/' + 
		secondCard.image + '.gif"><p> '+ 
		secondCard.description + '</p>';

		document.getElementById("display_15").innerHTML ='<h2>第三多的成分是：</h2><h2>' + 
		thirdCard.name + '</h2>' +  '<img src="images/' + 
		thirdCard.image + '.gif"><p> '+ 
		thirdCard.description + '</p>';

		document.getElementById("display_10").innerHTML = '<h2>第四多的成分是：</h2><h2>' + 
		fourthCard.name + '</h2>' +  '<img src="images/' + 
		fourthCard.image + '.gif"><p> '+ 
		fourthCard.description + '</p>';

		document.getElementById("display_5").innerHTML ='<h2>第五多的成分是：</h2><h2>' + 
		fifthCard.name + '</h2>' +  '<img src="images/' + 
		fifthCard.image + '.gif"><p> '+ 
		fifthCard.description + '</p>';
*/
		};
	
