// 7 Primitive
// number, string, boolean, undefined, null, BigInt, Symbol
// Object
// Type level
// type
// interface
// :
// Value level
{
    // Don't type too much!
    var name_1 = "Kevin";
    var newName = name_1;
    newName = "Felicity";
    var newId = 34796;
    var age = 101;
}
{
    // any, void, unknown, never
    var name_2 = "Kevin";
    name_2 = true;
    function log() {
        console.log("Hello!");
    }
    function doSomethingWithAge(age) {
        age;
        if (typeof age === "string") {
            age;
        }
    }
    function example(x) {
        if (typeof x === "string") {
            return true;
        }
        else if (typeof x === "number") {
            return false;
        }
        var exhaustiveCheck = x;
        return false;
    }
}
{
    200 /* STATUS_CODE.OK */;
    var status_1 = 200;
    if (status_1 === 200 /* STATUS_CODE.OK */) {
        console.log("It worked!");
    }
}
