function shortcut(s1, s2) {
  // your code here
if (s1 ===' ' || s2 ===' ') {
   return ' ';
  } else { 
    let a=	s1.slice(0,1);
    let b=	s2.slice(0,1);
    return a + b;
  }
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2)); 
