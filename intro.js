/*var changeList = function(e, i) {
    thelist = document.getElementById("thelist");
    if (e.type === "mousedown") {
	thelist[i].remove();
    }
    else if (e.type === "") {
    }
    
};

var getIndex = function(e) {
*/

removeEle = function(i) {
    thelist[i].remove();
};

changeHead = function(i) {
    var head = document.getElementById("h");
    head.innerHTML = thelist[i];
};

var thelist = document.getElementsByTagName("li");
for (var i = 0; i < thelist.length; i++) {
    thelist[i].addEventListener("click", removeEle);
    thelist[i].addEventListener("mouseover", changeHead);
}

    
