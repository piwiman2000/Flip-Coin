function flip() {
  return Math.random() >= 0.5;
}

function randonNumber(n)
{
    if(n > 0 && n <= 1000000)
    {
        var resultFlipCoin = flip();
        n = makeRandom(n,resultFlipCoin); 
    }
    else
    {
        throw "Error2";
    }
    return n;
}


function makeRandom(seed,result) {
    var next = 0; // chosen by fair dice roll.
                  // guaranteed to be random
    //If the results is heads
    if(result)
    {
        next = 2;
    }
    //If the result is tails
    else{
        next = 1;
    }
    return function() {
        var result = seed - next++;
        if(result < 0)
        {
            result = 0;
        }
        return result;
    };
}


