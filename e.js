function e(x){
    var x,f=1,r=1,i;
for(i=1;i<=x;i++){
    f*=i;
    r+=(1/f);
 }
 return r;
}
console.log("E es ",e(3));