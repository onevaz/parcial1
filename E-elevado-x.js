function eelevadox(x){
    var x,e=x,f=1,r=1,i;
    for(i=1;i<=x;i++){
        f*=i;
        r+=(e/f);
        e*=x;
    }
    return r
    }
    console.log("E elevado a X es ",eelevadox(4));