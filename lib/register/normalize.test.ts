import assert from "node:assert/strict";
import { test } from "node:test";
import { getDefaultCountryCode } from "../brevo/config";
import {
  normalizeEmail,
  normalizeInstagram,
  normalizePhone,
} from "./normalize";

test("default country code is US", () => {
  assert.equal(getDefaultCountryCode(), "1");
});

test("normalizes email, instagram handle and US phone", () => {
  assert.equal(normalizeEmail("  Ana@Mail.COM "), "ana@mail.com");
  assert.equal(normalizeInstagram("@studio.ink"), "studio.ink");
  assert.equal(
    normalizeInstagram("https://instagram.com/studio.ink/"),
    "studio.ink",
  );
  assert.equal(normalizePhone("415 555 0134"), "+14155550134");
  assert.equal(normalizePhone("4155550134"), "+14155550134");
  assert.equal(normalizePhone("+1 415 555 0134"), "+14155550134");
  assert.equal(normalizePhone("1 415 555 0134"), "+14155550134");
  assert.equal(normalizePhone("55 1234 5678", "52"), "+525512345678");
});
