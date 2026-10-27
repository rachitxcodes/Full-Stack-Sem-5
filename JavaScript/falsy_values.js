function testFalsiness(label, value) {
    if (!value) {
        console.log(`❌ ${label} is Falsy (Evaluates to false)`);
    } else {
        console.log(`✅ ${label} is Truthy (Evaluates to true)`);
    }
}

console.log("--- THE 8 FALSY VALUES ---");

// 1. The literal boolean false
testFalsiness("false", false);

// 2. The number zero (and -0)
testFalsiness("0", 0);
testFalsiness("-0", -0);

// 3. BigInt zero
testFalsiness("0n", 0n);

// 4. Empty strings (any quote style)
testFalsiness("Empty string", "");

// 5. null
testFalsiness("null", null);

// 6. undefined
testFalsiness("undefined", undefined);

// 7. NaN (Not a Number)
testFalsiness("NaN", NaN);

// 8. document.all (Legacy browser object - only testable in web browsers)
if (typeof document !== 'undefined') {
    testFalsiness("document.all", document.all);
} else {
    console.log("⏳ document.all can only be tested in a browser environment.");
}


console.log("\n--- COMMON GOTCHAS (ACTUALLY TRUTHY) ---");

// These often trick developers but they evaluate to true!
testFalsiness("Empty Array []", []);
testFalsiness("Empty Object {}", {});
testFalsiness('String "0"', "0");
testFalsiness('String "false"', "false");
