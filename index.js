// Grab all "a" elements, convert to array.
var pics = Array.prototype.slice.call(document.querySelectorAll("a"));

// Filter to only include photos (assume link has "/p/")
var pics2 = pics.filter(pic => pic.href.includes("/p/"));

// Convert to line-separated string
var picString = pics2.join("\n");

// Output to console.
console.log(picString);
