console.log(sumadparhasta(4));
console.log(ultimoparsumado(3));
console.log(serie(100000));

function sumadparhasta(x){
    var x,r=0,i;
    for(i=1;i<=x;i++){
        r+=(i*2)
    }
    return r;
}
function ultimoparsumado(x){
    var x,up=0,i,r=0;
    for(i=1;r<=x;i++){
        r+=(i*2);
        up=(i*2)
    }
    return up;
}
function serie(x){
    var x,den=1,i,r=0,n=4;
    for(i=1;i<=x;i++){
        r+=n/den;
        den+=2;
        n*=-1
    }
    return r;
}