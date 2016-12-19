var lis = document.getElementsByTagName("li");
var thelist = document.getElementById("thelist");

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
    
    thelist.appendChild(n);
    n.addEventListener("mouseover",changeHead)
    n.addEventListener("click",removeEle)
};
    

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", removeEle);
    lis[i].addEventListener("mouseover", changeHead);
}
var thebutton = document.getElementById("b");
b.addEventListener("click", addEle);

var newlist = document.getElementById("newlist");
var newbutton = document.getElementById("newbutton");

var fib = function(i) {
    if (i <  2) {
	return 1;
    }
    else return fib(i-1) + fib(i-2);
};

var addFib = function() {
    var n = document.createElement("li");
    var i = newlist.children.length;
    n.innerHTML = fib(i);
    newlist.appendChild(n);
};


newbutton.addEventListener("click", addFib);

