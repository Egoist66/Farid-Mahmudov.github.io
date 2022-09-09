/*
  Fetch POST/GET App,
  Author: Farid Makhmudov,
  Date: 08.09.2022,


  Comment: This simple app can clearly show how different type of requests work and manimulate with Data.

*/

"use strict";


window.addEventListener('DOMContentLoaded', function(){


          
  let method = "";
  const primary_method = document.querySelector("#fetch-params");
  const form = document.querySelector("form");

  function observeSelect() {
    const body = document.querySelector("#post-body");
    const jsonreader = document.querySelector("#inputGroupFile01");

    if (this.value === "GET") {
      method = this.value;
      body.style.cssText = "display: none !important";
      jsonreader.style.cssText = "display: none !important";
      document.querySelector('.out').innerHTML = '';
    } else {
      method = this.value;
      body.style.cssText = "display: block !important";
      jsonreader.style.cssText = "display: block !important";
      document.querySelector('.out').innerHTML = '';
    }

    return console.log(method);
  }

  primary_method.addEventListener("change", observeSelect);



  async function sendRequest() {
    const body = document.querySelector("#post-body");
    const url = document.querySelector("#fetch-input");
    const out = document.querySelector(".out");
    const fetchType = document.querySelector("#fetch-type");
    const fetchParser = document.querySelector("#fetch-parser");

    if (method === "POST") {
      // POST Block

      let parsedStr = JSON.parse(document.querySelector("textarea").value);
      let stringifiedStr = JSON.stringify(parsedStr);

      const response = await fetch(url.value, {
        method: method,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": `${fetchType.value}`,
        },
        body: stringifiedStr,
      });

      if (fetchParser.value === "text") {
        if (response.ok) {
          return await response
            .text()
            .then((response) => (out.innerHTML = response));
        } else {
          out.innerHTML = new Error("Fetch failed" + " " + response.status);
        }
      } else {
        if (response.ok) {
          let data = await response.json();
          console.log(data);

          for (let key in data) {
            out.innerHTML += `<pre>${key}: ${JSON.stringify(data[key])}</pre>`;
          }
        } else {
          out.innerHTML = new Error("Fetch failed" + " " + response.status);
        }
      }
    } else {
      // GET Block

      try {
        const response = await fetch(url.value);
        let data;
        console.log(response.status);

        if (fetchParser.value === "text") {
          data = await response.text();
          console.log(data);

          out.innerHTML = `<pre>${data}</pre>`;
        } else {
          out.innerHTML = "";
          data = await response.json();
          console.log(data);
          for (let key in data) {
            out.innerHTML += `<pre>${key}: ${JSON.stringify(data[key])}</pre>`;
          }
        }
      } catch (e) {
        out.innerHTML = e;
      }
    }
  }

  form.addEventListener("submit", function (e) {
    const url = document.querySelector("#fetch-input");
    e.preventDefault();

    if (url.value === "") {
      alert("URL is required");
    } else {
      sendRequest();
    }
  });

  document.querySelector(".reset").onclick = () => {
    const body = document.querySelector("#post-body");
    const jsonreader = document.querySelector("#inputGroupFile01");
    document.querySelector(".out").innerHTML = "";

    body.style.cssText = "display: none !important";
    jsonreader.style.cssText = "display: none !important";
  };

  document.querySelector(".parse").onclick = () => {
    let parsedStr;

    if (document.querySelector("textarea").value === "") {
      alert("Nothing to parse !");
    } else {
      parsedStr = JSON.parse(document.querySelector("textarea").value);
      alert("Parsing from default Body is done, check the console");
      console.log(parsedStr);
    }
  };

  function getJSON(file) {
    return new Promise(function (resolve, reject) {
      let reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  document.querySelector(".read").addEventListener("click", async function () {

    const body = document.querySelector("#post-body");
    let file = document.querySelector("#inputGroupFile01");


    if((file.files[0] !== undefined || file.value !== '') && (file.files[0]?.type === 'application/json')){

      let parsedFile = getJSON(file.files[0]);

      document.querySelector('#fetch-params').value = "POST";
      body.innerHTML = await parsedFile;
     
    }
    else {
      const body = document.querySelector("#post-body");
      body.style.cssText = "display: none !important";
      const jsonreader = document.querySelector("#inputGroupFile01");
      jsonreader.style.cssText = "display: none !important";
      alert("No file or File type error !! ");
   
    }

   
  });





})