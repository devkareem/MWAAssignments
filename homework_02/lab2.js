
    Array.prototype.pluck = function (isPulck) {
        let arr = this;
        let result = 0;
        if (isPulck) {
            process.nextTick(function () {
                arr.forEach((vl) => {
                    if (vl > result)
                        result = vl;
                });
                console.log(result);
            });
        }
        else {
            setImmediate(function () {
                arr.forEach((vl) => {
                    if(result===0) 
                    result = vl;
                    if (vl < result )
                        result = vl;
                });
                console.log(result);
            });
        }
    };

    console.log('start');
    [1, 2, 3, 4, 5, 6, 7, 8].pluck(false);
    [1, 2, 3, 4, 5, 6, 7, 8].pluck(true);
    console.log('end');
