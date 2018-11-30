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

  children () {
    let result = [];
    this.arr.forEach((el) => result.push(el.children));
    return new DOMNodeCollection(result);
  }

  parent () {
    let result = [];
    this.arr.forEach((el) => result.push(el.parentNode));
    return new DOMNodeCollection(result);
  }

  remove () {
    this.arr = [];
  }

  find (selector) {
    let result = [];
    this.arr.forEach((el) => {
      if (el.children === selector) {
        result.push(el);
      }
    });
    return new DOMNodeCollection(result);
  }

}

module.exports = DOMNodeCollection;
