function expr_parser(expr) {
    var numTurn = true;
    var numStack = [], opStack = [];
    var sym = "";
    
    var i=0;
    var a, b, op;
    while (i<expr.length) {
        while (expr[i] == '(') i++;
        sym = expr[i];
        i++;
        if (numTurn) {
            while (!isNaN(expr[i]) || expr[i] == '.') {
                sym += expr[i];
                i++;
            }
        }

        if (!isNaN(sym)) {
            numStack.push(sym);
            numTurn = false;
        } else if (isOperator(sym)) {
            opStack.push(sym);
            numTurn = true;
        } else {
            b = parseFloat( numStack.pop() );
            a = parseFloat( numStack.pop() );
            op = opStack.pop();

            var x = evauluate(a, b, op);
            numStack.push(x);
        }
    }

    return numStack.pop();
}

function isOperator(a) {
    return a == '+' || a == '-' || a == '*' || a == '/';
}

function evauluate(a, b, op) {
    if (op == '+') {
        return a + b;
    } else if (op == '-') {
        return a - b;
    } else if (op == '*') {
        return a * b;
    } else {
        return a / b;
    }
}

console.log( expr_parser( process.argv[2] ) );
