export function addAvailability (isAvailable){
return function(target){
return class {
   isavailable= isAvailable;
};
}
}