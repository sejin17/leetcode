/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if(functions==null){
            return x;
        }else{
            functions = functions.reverse();
           // console.log(functions);
            for(let i =0; i < functions.length; i++){
                x=functions[i](x);
            }
            return x;
        }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */