var encodedStr = document.getElementById('codedph').innerHTML;
var decodedStr = atob(encodedStr);

document.getElementById('codedph').innerHTML = decodedStr;

var encodedStr = document.getElementById('codedem').innerHTML;
var decodedStr = atob(encodedStr);

document.getElementById('codedem').innerHTML = decodedStr;
