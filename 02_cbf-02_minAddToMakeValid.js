module.exports = { minAddToMakeValid };

function minAddToMakeValid(s) {
    let open = 0, close = 0;
    
    for(let c of s) {
        if(c === '(') {
            open++;
        } else {
            if(open === 0) {
                close++;
            } else {
                open--;
            }
        }
    }

    return open + close;
}

//error occured
//   else if(open) close++;