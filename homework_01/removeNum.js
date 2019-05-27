(function () {
    Array.prototype.removeNum = function (num) {
        let self = this;
        return new Promise(function (resolve, reject) {
            resolve(self.filter(value => value != num));
        });

    }
    async function excuteRemove() {
        try {
       
            console.log(await [1, 2, 3, 4, 1, 5].removeNum(1));
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log("Start");
    excuteRemove();
    console.log("Finish");
})();