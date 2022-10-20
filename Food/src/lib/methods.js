/* 

Author: Farid Makhmudov;
Version: 1.0.1;
Creating Date: 15.07.2022;

*/

// css simplified initializing

const css = (Object.prototype = (elem, { cssText }) => {
  if (elem === undefined || null) {
    return "Empty argument!!";
  }

  elem.style.cssText = cssText;

  return elem;
});



// simplified console.log() && clear() && dir();

const logg = (Object.prototype = (data) => {
    console.log(data);
});
const clear = (Object.prototype = () => {
  return console.clear();
});
const dir = (Object.prototype = (element) => {
  console.dir(element);
});

// simplified DOM elements selection

const $Query = (Object.prototype = (elem) => {
  if (elem === undefined || null) {
    return "Empty argument!!";
  }

  if (document.querySelectorAll(elem).length > 1) {
    return document.querySelectorAll(elem);
  } else {
    return document.querySelector(elem);
  }
});

// simplified Array items existing check

const arrayIn = (Object.prototype = (arr, elem) => {
  if (elem === undefined || null) {
    return "Empty argument!!";
  }

  for (let items of arr) {
    if (items.includes(elem)) {
      return elem;
    } else {
      return -1;
    }
  }
});

// simplified innerHTML property

const html = (Object.prototype = (selector, htmlInner) => {
  return (document.querySelector(selector).innerHTML += htmlInner);
});

// simplified textContent property

const text = (Object.prototype = (selector, textInner) => {
  return (document.querySelector(selector).textContent += textInner);
});

// simplified DOM element creation

const createElement = (Object.prototype = (tag, selectorName, link) => {
  if (tag === undefined || selectorName === "" || undefined) {
    return "Empty argument!!";
  }

  let newElem = document.createElement(tag);
  newElem.classList.add(selectorName);
  newElem.href = link;

  if (link === undefined) {
    link = "";
  }

  return newElem;
});

const onclick = (Object.prototype = (element, $function) => {
  if (element === undefined || $function === "" || undefined) {
    return "Empty argument!!";
  }

  if (element === document) {
    return (document.onclick = $function);
  }

  if (document.querySelectorAll(element).length > 1) {
    return (document.querySelectorAll(element).onclick = $function);
  } else {
    return (document.querySelector(element).onclick = $function);
  }
});

// simplified default actions prevent

const dieEvent = (Object.prototype = (event) => {
  if (event !== undefined) {
    return event.preventDefault();
  } else {
    return false;
  }
});

const len = (Object.prototype = (arg) => {
  return arg.length;
});

// This method allows to iterate loop items and use any css rules to them. AND if there is a need - you can  transform HTML Collections / Node Lists to natural Array, transfering boolean type "true"

const each = (Object.prototype = (elem, str, bool) => {
  let newEl;

  for (let i = 0; i < elem.length; i++) {
    newEl = css(elem[i], {
      cssText: str,
    });
  }

  switch (bool) {
    case true:
      return (newEl = [...elem]);

    default:
      return (newEl = elem);
  }
});

// simple body notation

const Body = (Object.prototype = () => {
  return document.body;
});

const display = (Object.prototype = (element, val) => {
  return (document.querySelector(element).style.display = val);
});

const is = (Object.prototype = (element, self) => {
  if (document.querySelector(element).matches(self)) {
    return true;
  } else {
    return false;
  }
});

const windowMatch = (Object.prototype = (size) => {
  if (window.matchMedia(`(${size})`).matches) {
    return "match";
  } else {
    return "unmatch";
  }
});

const merge = (Object.prototype = (obj1, obj2) => {
  if (obj1 === ("" || undefined) || obj2 === ("" || undefined)) {
    return new Error("Empty arguments");
  }

  let mergedObj = Object.assign(obj1, obj2);

  return mergedObj;
});

const getEvenOdd = (Object.prototype = (type, arr) => {
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      return new Error("Not-allowed argument type: (String)");
    }

    switch (type) {
      case "even":
        if (arr[i] % 2 === 0) {
          newarr.push(arr[i]);
        }
        break;

      case "odd":
        if (arr[i] % 2 !== 0) {
          newarr.push(arr[i]);
        }
        break;
     case '':
        newarr.push(arr[i]); 
        break;

      default:
        newarr = "Error";
    }
  }

  return newarr;
});

const setEvent = Object.prototype = (elem, eventType, callback) => {

  if(elem === document){
    return document.addEventListener(eventType, callback);
  }

    if(document.querySelectorAll(elem).length > 1){
     
      for(let i = 0; i < document.querySelectorAll(elem).length; i++){
        document.querySelectorAll(elem)[i].addEventListener(eventType, callback);
      }

      return [...document.querySelectorAll(elem)];
    }
    else {
     document.querySelector(elem).addEventListener(eventType, callback);
     return document.querySelector(elem);
    }

    
}
const getData = async function(url){
  let response;
  try {

    const request = await fetch(url);

    if(!request.ok){
      console.log(new Error(`GET Fetch failed: ${url}, Status: ${request.status}`));
    }
    else {
      response = await request.json();
    }
  
  
    
  }
  catch(error){
    console.log(error);
  }

  return await response;
}





class fethRequest {
  constructor(url, method = "GET", body = null) {
    if (method === "POST") {
      this.post_response = fetch(url, {
        method: method,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
      })
        .then((POST_data) => {
          if (POST_data.ok) {
            return POST_data.json();
          } else {
            console.log(new Error("POST fetch failed" + POST_data.status));
          }
        })
        .then((POST_data) => {
          console.log(POST_data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      this.get_response = fetch(url);

      this.get_response
        .then((GET_data) => {
          if (GET_data.ok) {
            return GET_data.json();
          } else {
            console.log(new Error("Fetch failed" + " " + GET_data.status));
          }
        })
        .then((GET_data) => {
          console.log(GET_data);
        })

        .catch((e) => {
          console.log(e);
        });
    }
  }
}


function serialize(form){

  const data = new FormData(document.querySelector(form));
  let str = {};

  for(let item of data.entries()) {
     
      str[item[0]] = item[1];

   
  }

  Object.defineProperty(str, "data", {
      enumerable: false,
      
  })

  return str;

}


function serializeArray(form){
  const data = new FormData(document.querySelector(form));
  const json = JSON.stringify(Object.fromEntries(data.entries()));

  return json;
}


async function xhrRequest(method, url, response_type, headers, body = null) {
  try {
    const data = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = response_type;
      xhr.setRequestHeader("Content-type", headers);
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.statusText + ' ' + xhr.status);
      xhr.send(body);
    });
    return await data;
  } catch (error) {
    console.log(error);
  }
}

function checkLazySupport(){
  let response;

if ("loading" in HTMLImageElement.prototype) { 
  response = {"status": "supported"};
} else {
  response = {"status": "not-supported"};
}

return console.log(response);
}

function deepClone(obj){
  obj = JSON.parse(JSON.stringify(obj));

  return obj;
}

function copy(obj){

  let content;

  content = document.querySelector(obj).outerHTML;

  return content;
}

function smoothScroll({top, left , behavior}){
  
 return window.scroll({
    top: top,
    left: left,
    behavior: behavior
  });
}

function targetHasClass(elem, a){

  if(elem === event.target){
    return event.target.classList.contains(a);
  }
  else {
    throw new Error('Error');
  }

  
}

function LS(objname = null, obj = null){

  if(objname in window.localStorage){
    console.warn('There will be reasigning the obj key !!'.toUpperCase());
  }
  else {

    if(obj === null || objname === null){
      return window.localStorage;
    }
    else {
  
      return window.localStorage.setItem(objname, stringify(obj));
    }

  }

 

}


function sum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  return sum
}


function isEmpty(obj){

  for(let key in obj){

      if(obj.hasOwnProperty(key)){
          return true;
      }
      else {
          return false;
      }
  }
}

function stringify(obj){
  return JSON.stringify(obj);
}

function parse(obj){
  return JSON.parse(obj);
}

function arrayMerge(array, array2){

    return array.concat(array2);

}

