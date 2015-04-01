var arg    = process.argv,
    result = 0;

for (i=2; i<arg.length; i++) {
    result += Number(arg[i]);
}

console.log(result);