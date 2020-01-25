let args = process.argv.slice(2);

function isUpperCase(chara) {
    if (chara == '_' || chara == '-') {
        return false;
    }
    return chara == chara.toUpperCase();
}

function stringToLower(str) {
    newStr = ''
    for (var i = 0; i < str.length; i++) {
        newStr += str[i].toLowerCase();
    }

    return newStr;
}

function writeFile(textCase, textString) {
    var fs = require('fs');

    // Create textfile called 'input.txt'
    fs.open('input.txt', 'w', function(err) {
        if (err) throw err;
    });

    fs.writeFileSync('input.txt', '');

    fs.appendFileSync('input.txt', textCase + ',\n');

    var str = textString[0];
    for (var i = 1; i < textString.length; i++) {
        if (isUpperCase(textString[i])) {
            str = stringToLower(str);
            fs.appendFileSync('input.txt', str + ',\n');
            str = textString[i];
        } 
        
        else if (textString[i] == '_' || textString[i] == '-') {
            str = stringToLower(str);
            fs.appendFileSync('input.txt', str + ',\n');
            str = '';
        } 
        
        else {
            str += textString[i];
        }
    }

    str = stringToLower(str);
    fs.appendFileSync('input.txt', str);
}

if (process.argv.length != 5) {
    console.log("Invalid amount of arguments!");
} else {
    var fs = require('fs');
    var text = fs.readFileSync(process.argv[4]).toString('utf-8');
    text = text.substring(0, text.length - 1);
    
    writeFile(process.argv[3], text);

}