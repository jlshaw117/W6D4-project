class DOMNodeCollection {
  constructor (arr) {
    this.arr = arr;
  }
  html(str = ""){
    if(str === "") return this[0].innerHtml;
    else{
      this.arr.forEach((el) =>{
        el.innerHtml = str;
      });
    }
  }

  empty(){
    this.arr.forEach((el) =>{
      el.innerHtml="";
    });
  }

  append(x){
    // debugger
    if(x instanceof HTMLElement){
    this.arr.forEach((el) =>{
      el.appendChild(x);
    });
  }else if (x instanceof DOMNodeCollection) {
    for (var i = 0; i < this.length; i++) {
        for(let j = 0; j < x.length;j++){
          this[i].appendChild(x[j]);
        }
    }
  }else {
    this.arr.forEach((el) =>{
      el.innerHTML += x;
    });
  }
  }
  attr(name,val){
      this.forEach((el) =>{
          el[name] = value;
      });
  }
  addClass(name){
    this.forEach((el) =>{
      el["class"] += ` ${name}`;
    });
  }

  removeClass(){
    this.forEach((el) =>{
      el["class"] = "";
    });
  }

}

module.exports = DOMNodeCollection;
