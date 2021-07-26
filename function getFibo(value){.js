function getFibo(value){
if(value <=2) return 1;
return(getFibo(value-1)+getFibo(value-2));
}



console.log(getFibo(6));
console.log(getFibo(7));
console.log(getFibo(8));
