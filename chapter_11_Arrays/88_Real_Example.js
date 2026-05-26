let browser = ["chrome", "firefox", "safari","Opera", "edge"];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let Remove = browser.shift();
console.log(browser);
console.log(Remove);

for (let i = 0; browser.length>i; i++){
  console.log(browser[i]);
  if (browser[i] === "Opera"){
    console.log("Opera is removed from the selenium test suite");
  }
}
