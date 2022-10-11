(function main(){
    let parts = ['shoulders', 'knees','test'];
    let lyrics = [ ...parts];
    let f = {
        h:1,f:2,c:3
    }
    x(...f)
})();
function x(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
