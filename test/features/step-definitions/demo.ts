import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  browser.url("http://www.google.com");
  let ele = await $(`[id=L2AGLb]`);
  ele.click();
  browser.pause(10000);
});
When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> Search Item: ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $(
    `//*[@id='rso']/div[1]/div/div/div/div/div/div/div/div[1]/a/h3`
  );
  await ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> expected URL : ${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

Given(/^A web page is opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

let num = "12345";

//let strNum = num.toString();

Then(/^Perform web Interaction$/, async function () {
  let ele = await $(`//*[@id="content"]/div/div/div/input`);
  // ele.setValue(num);
  await ele.click();
  for (let i = 0; i < num.length; i++) {
    let charNum = num.charAt(i);
    await browser.pause(1000);
    await browser.keys(charNum);
  }

  await browser.pause(7000);
});
