String.prototype.info=function(){
	return {length: this.length, 
		    firstChar: this.substr(0, 1),
		    lastChar: this.substr(this.length-1, 1)};
};


console.log("foobar".info());
