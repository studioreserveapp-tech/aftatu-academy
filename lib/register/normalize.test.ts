import assert from "node:assert/strict";
import { test } from "node:test";
import {
  normalizeEmail,
  normalizeInstagram,
  normalizePhone,
} from "./normalize";

test("normalizes email, instagram handle and Mexican phone", () => {
  assert.equal(normalizeEmail("  Ana@Mail.COM "), "ana@mail.com");
  assert.equal(normalizeInstagram("@studio.ink"), "studio.ink");
  assert.equal(
    normalizeInstagram("https://instagram.com/studio.ink/"),
    "studio.ink",
  );
  assert.equal(normalizePhone("55 1234 5678", "52"), "+525512345678");
  assert.equal(normalizePhone("+52 55 1234 5678", "52"), "+525512345678");
});
