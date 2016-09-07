var hand = document.getElementById("hand");
var hand2 = document.getElementById("hand2");
if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
    hand.className = "hand hand-animate";
    hand2.className = "hand2 hand-animate";
} else {
    hand.className = "qrcode";
    hand.innerHTML = "手机扫描二维码看效果";
}
window.onload = function() {
    var myShakeEvent = new Shake({
        threshold: 15
    });
    myShakeEvent.start();
    window.addEventListener('shake', shakeEventDidOccur, false);
    // shakeEventDidOccur();
    function shakeEventDidOccur() {
        var audio = document.getElementById("audio");
        var audio2 = document.getElementById("audio2");
        var result = document.getElementById("result");
        var arr = ['妹子一枚', '福利图片一套', '码农笔记一本', '土豪金一台'];
        var num = Math.floor(Math.random() * 4);
        audio.play();
        setTimeout(function() {
            $("#hand").addClass("handmove");
            $("#hand2").addClass("handmove2");
        }, 1000);
        result.className = "result";
        result.innerHTML = "<div>摇得" + arr[num] + "！</div>"+"<img src='images/resultbg.png'>";
        setTimeout(function() {
            audio2.play();
            result.className = "result result-show";
        }, 1800);
        $("#hand").removeClass("handmove");
        $("#hand2").removeClass("handmove2");
    }
};
