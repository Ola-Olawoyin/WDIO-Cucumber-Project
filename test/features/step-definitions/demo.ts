import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

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
  let ele = await $(`<h3>`);
  await ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> expected URL : ${expectedURL}`);
  let url = await browser.getUrl();
chai.expect(url).to.equal(expectedURL);
});
