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

var thelist = document.getElementsByTagName("li");

removeEle = function() {
   
    this.remove();
};

changeHead = function() {
    var head = document.getElementById("h");
    head.innerHTML = this.innerHTML;
};



    

for (var i = 0; i < thelist.length; i++) {
    thelist[i].addEventListener("click", removeEle);
    thelist[i].addEventListener("mouseover", changeHead);
}
