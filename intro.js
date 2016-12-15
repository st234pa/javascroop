var changeList = function(e, i) {
    thelist = document.getElementById("thelist");
    if (e === "click") {
	thelist[i].remove();
    }
    else if (e === "") {
    }
    
};

var getIndex = function(e) {
    
