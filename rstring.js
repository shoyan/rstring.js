RString = {};

RString = function RString(list) {
    this.list = list;
    this.num  = list.length;
}

RString.prototype.get = function() {
    var index = Math.floor((Math.random()*this.num));
    return this.list[index];
}
