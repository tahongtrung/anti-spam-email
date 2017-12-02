/*random algorithm*/
function rnd() {
    return rnd.seed = (9301 * rnd.seed + 49297) % 233280, rnd.seed / 233280
}

function rand(a) {
    return Math.ceil(rnd() * a)
}

/*encode email*/
function munge() {
    for (
    	address = document.mungeForm.emailInput.value, 
    	address = address.toLowerCase(), coded = "", 
    	linktext = 0 == document.mungeForm.linkInput.value.length ? linktext = '"+link+"' : linktext = document.mungeForm.linkInput.value, unmixedkey = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    	inprogresskey = unmixedkey, mixedkey = "",
    	unshuffled = 62, i = 0; i <= 62; i++
    )
    	ranpos = rand(unshuffled) - 1,
    	nextchar = inprogresskey.charAt(ranpos), 
    	mixedkey += nextchar, 
    	before = inprogresskey.substring(0, ranpos), 
    	after = inprogresskey.substring(ranpos + 1, unshuffled), 
    	inprogresskey = before + after, 
    	unshuffled -= 1;
    for (
    	cipher = mixedkey,
    	shift = address.length, 
    	txt = '<script type="text/javascript" language="javascript">\n<!--\n\n', 
    	j = 0; 
    	j < address.length; 
    	j++
    )
    	cipher.indexOf(address.charAt(j)) == -1 ? (chr = address.charAt(j), coded += address.charAt(j)) : (chr = (cipher.indexOf(address.charAt(j)) + shift) % cipher.length, coded += cipher.charAt(chr));
    	txt += '{ coded = "' + coded + '"\n  key = "' + cipher + '"\n  shift=coded.length\n  link=""\n  for (i=0; i<coded.length; i++) {\n    if (key.indexOf(coded.charAt(i))==-1) {\n      ltr = coded.charAt(i)\n      link += (ltr)\n    }\n    else {     \n      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length\n      link += (key.charAt(ltr))\n    }\n  }\ndocument.write("<a href=\'mailto:"+link+"\'>' + linktext + '</a>")\n}\n-->\n</script><noscript>Sorry, you need Javascript ON to see my email.</noscript>\n',
    	document.output.source.value = txt  
}
rnd.today = new Date, rnd.seed = rnd.today.getTime();


/*Clipboard function*/
function copyToClipboard(a) {
    var d, e, b = "_hiddenCopyText_", c = "INPUT" === a.tagName || "TEXTAREA" === a.tagName;
    if (c) f = a, d = a.selectionStart, e = a.selectionEnd;
    else {
        if (f = document.getElementById(b), !f) {
            var f = document.createElement("textarea");
            f.style.position = "absolute", f.style.left = "-9999px", f.style.top = "0", f.id = b, document.body.appendChild(f)
        }
        f.textContent = a.textContent
    }
    var g = document.activeElement;
    f.focus(), f.setSelectionRange(0, f.value.length);
    var h;
    try {
    	h = document.execCommand("copy") 
 	}
    catch (a) {
    	h = !1 
 	}
    return g && "function" == typeof g.focus && g.focus(), c ? a.setSelectionRange(d, e) : f.textContent = "", h
}

document.getElementById("copybtn").addEventListener("click", function() { copyToClipboard(document.getElementById("code")) });