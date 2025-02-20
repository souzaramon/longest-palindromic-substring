import { test } from "node:test";
import * as assert from "node:assert";

import { longestPalindromicSubstring } from "./index.js";

test("abac", (t) => {
  assert.strictEqual(longestPalindromicSubstring("abac"), "aba");
});

test("tacag", (t) => {
  assert.strictEqual(longestPalindromicSubstring("tacag"), "aca");
});

test("wegeeksskeegyuwe", (t) => {
  assert.strictEqual(
    longestPalindromicSubstring("wegeeksskeegyuwe"),
    "geeksskeeg"
  );
});
