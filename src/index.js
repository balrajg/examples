let test = "hello world java";
//console.log(test.split(' ').reverse().join(' '))
let op = "";
test = test.split(" ");
for (let i = test.length - 1; i >= 0; i--) {
  op += test[i] + " ";
}

let n = 10;
let fib = [1, 1, 2];
for (let i = 3; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
//console.log(fib[n-1]) //3

function fibo(n, o) {
  o = o || [];
  if (o[n] != undefined) {
    return o[n];
  }
  if (n <= 2) {
    return n;
  }

  o[n] = fibo(n - 1, o) + fibo(n - 2, o);

  return o[n];
}
op = [0, 1, 1];
//console.log(fibo(6, op), op);

function factorial(n) {
  let res = 1;

  for (let i = n; i > 1; i--) {
    res = res * i;
  }
  return res;
}

let res = 1;
function factRec(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factRec(n - 1);
}

//console.log(factorial(7))
//console.log(factRec(7));

let arr = [4, 5, 6, 7, 8, 9];
//console.log(Math.max(...arr))
//console.log(Math.min.apply(null,arr))
arr.sort(function(a, b) {
  return a - b;
});
//console.log(arr[0])
var max = arr.reduce(function(a, v) {
  return Math.min(a, v);
});
//console.log(max);

let nt = "Hello world to you";
let ntA = nt.split(" ");
const reverseString = function(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};

let lop = ntA.reduce((a, v) => {
  return (a += reverseString(v) + " ");
}, "");
console.log(lop.trim());

console.log(
  nt
    .split(" ")
    .map(v =>
      v
        .split("")
        .reverse()
        .join("")
    )
    .join(" ")
);

console.log(nt.split("H"));

let newOb = { a: "123" };
let abcd = newOb;
