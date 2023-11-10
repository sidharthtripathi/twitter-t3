export function removeAt(input : string){
    let str = ''
    for(let i = 0 ; i<input.length ; i++){
        if(input[i]==='@') break;
        str = str + input[i]
    }
    return str;
}