
import * as asyncTests from "./asyncTests";

import {
  TestAsync
} from "../src/tsUnitAsync";


export function runTests() {
  "use strict";
  let test = new TestAsync(asyncTests);

  let promise = test.runAsync();

  promise.then((result) => {
    //console.log(result);

    if (result.errors.length) {
      console.log('---');
      result.errors.forEach((e)=>{
        console.log(`Failed: ${e.testName}.${e.funcName} - ${e.message}`);
      });
      console.log('---');
      console.log(`ran unit tests, ${result.passes.length} passed, ${result.errors.length} failed`);
    } else {
      let testnames = result.passes.map((x)=>`${x.testName}.${x.funcName}`).join('\n');
      console.log('---');
      console.log(testnames);
      console.log('---');
      console.log(`ran unit tests, all ${result.passes.length} tests passed`);
    }
  }, (err) => {
    console.log(err);
  })
}

runTests();
