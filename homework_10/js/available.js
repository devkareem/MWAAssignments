export function addAvailability(isAvailable) {
    return function (target) {
        return /** @class */ (function () {
            function class_1() {
                this.isavailable = isAvailable;
            }
            return class_1;
        }());
    };
}
