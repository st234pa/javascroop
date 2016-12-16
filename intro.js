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

var lis = document.getElementsByTagName("li");

removeEle = function() {
   
    this.remove();
};

changeHead = function() {
    var head = document.getElementById("h");
    head.innerHTML = this.innerHTML;
};


addEle = function() {
    var n = document.createElement("li");
    n.innerHTML = "New thing";
    var thelist = document.getElementById("thelist");
    thelist.appendChild(n);
}
    

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", removeEle);
    lis[i].addEventListener("mouseover", changeHead);
}
var thebutton = document.getElementById("b");
b.addEventListener("click", addEle);
