function card(name, description, image){
	this.name = name;
	this.description = description;
	this.image = image;
}

var deck = [
	new card('創造傻瓜', '創造傻瓜說：「我們隨時都在創造，我們可以從每件事、每個人身上創造出一些傻傻好笑的東西呢~」','1'),
	new card('眼淚傻瓜', '眼淚傻瓜說：「我們想哭就會大哭，想笑就會大笑，但我們的原則是，要哭就哭多一點！不要客氣！」','2'),
	new card('行動傻瓜', '行動傻瓜說：「我們做事情才不會怕，因為我們根本不會想太多，越想就越怕啊，不想就不會怕了，哈哈哈~」','3'),
	new card('慶祝傻瓜', '慶祝傻瓜說：「我們超會讓自己開心的，因為我們什麼都慶祝，成功也慶祝、失敗也慶祝~而且慶祝失敗還更有趣呢！」','4'),
	new card('忘掉傻瓜', '忘掉傻瓜說：「我們很得意自己超會忘掉事情的，因為我們的腦袋很小，只夠裝快樂的事啊哈哈~」','5'),
	new card('非二傻瓜', '非二傻瓜說：「我們從不去想對不對，因為本來就沒有一直都對的東西啊，我們想要過得好玩，「對」又不好玩！」','6'),
	new card('無知傻瓜', '無知傻瓜說：「我們很天真，我們很無知，但是我們很快樂！」','7'),
	new card('輕鬆傻瓜', '輕鬆傻瓜說：「我們才不為過去感傷呢，我們享受現在每一刻的快樂，因為我們要連過去沒有享受到的一起享受回來！」','8')
	];
	
	function getRandom(num){
		var randomNumber = Math.floor(Math.random() * num);
		return randomNumber;
		
	}
	
	document.getElementById("draw").onclick = function(){
		var index = getRandom(8);
		var currentCard = deck[index];

		document.getElementById("display").innerHTML = '<img src="images/' + 
		currentCard.image + '.jpg"><h3> '+ 
		currentCard.name + '</h3><p>' + 
		currentCard.description + '</p>'

		};
	