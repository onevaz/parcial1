function cos(x){
    r=1,f=1,n=1,x,a=1;
    for(i=1;i<=100;i++){
        f*=a*(a+1);
        n*=(x*x);
        r+=(-n/f);
        n*=-1;
        a+=2;
    }
    console.log("resultado =",r)
}
function ln(x){
    r=0,f=1;
    for(i=1;i<=100;i++){
        f*=((x-1)/x)
        r+=(1/i)*f;
    }
    console.log(r)
}
function sen(x){
    r=x,f=1,n=x,x,a=1;
    for(i=1;i<=100;i++){
        f*=(a+1)*(a+2);
        n*=(x*x);
        r+=(-n/f);
        n*=-1;
        a+=2;
    }
    console.log("resultado =",r)
}
cos(2);
ln(2);
sen(2)