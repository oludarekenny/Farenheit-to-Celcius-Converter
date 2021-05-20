
let farenheight;

function convertFahrToCelsius(farenheight){

    let input = typeof farenheight;

    if (input == "number" || input == "string"){

        let celcius
        celcius = (farenheight - 32) * 5/9; 
        celcius = celcius.toFixed(4);
        console.log(celcius);
        return celcius;
       
    }else{
       if (Array.isArray(farenheight)){
        var a = "array"; //since typeOf shows array as object, we used this conditional to force it to display array if type is array.
       }

        console.log(JSON.stringify(farenheight) + " is not a valid number but a/an " + a );
    }
 }


convertFahrToCelsius(3);

let n;

function checkYuGiOh(n){
 const m = Array.from({length: n}, (_,index) => index + 1);

    for (var i = 0; i < m.length; i++) {
        

        if(m[i] % 2 === 0 ){
            m[i] = "yuh";
        }

        if(m[i] % 2 === 0 ){
            m[i] = "yuh";
        }

        if(m[i] % 3 === 0 ){
            m[i] = "gi";
        }

        if(m[i] % 5 === 0 ){
            m[i] = "oh";
        }

    }

    console.log(m);
    return m;

}

checkYuGiOh(4)

