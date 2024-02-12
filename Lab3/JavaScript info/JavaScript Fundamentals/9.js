//What's the result of OR?
alert(null || 2 || undefined); // it will print 2
//What's the result of OR'ed alerts
alert(alert(1) || 2 || alert(3)); // it will first print 1, then 2
//What is the result of AND?
alert(1 && null && 2); // null
//What's the result of AND'ed alerts
alert(alert(1) && alert(2)); // it will print 1
//The result of OR AND OR
alert(null || (2 && 3) || 4); // it will print 3

if (-1 || 0) alert("first"); // will print (true || false == true)
if (-1 && 0) alert("second"); // will not print (true && false == false)
if (null || (-1 && 1)) alert("third"); // will print (false || true && true == false || true == true)



let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}