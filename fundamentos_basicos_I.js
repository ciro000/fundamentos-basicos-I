1.
function dosCIEN(){

    let array= [];

    for (let i = 0; i <= 255; i++){
        array.push(i);
    }

    return array
}

console.log(dosCIEN());

2.
function par (){
    let sum = 0;
    
    for(let i = 0; i<=1000; i++){
        if (i%2 === 0){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(par());

3.
function impar (){
    let sum = 0;
    
    for(let i = 0; i<=5000; i++){
        if (i%2 !== 0){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(impar());

4.
function sumarr(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
}

console.log(sumarr([2,3,4]));

5.
function mayorDe(arr){
    let max = arr[0];

    for(let i = 1; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(mayorDe([2,8,4,-2]));

6.
function promedio(arr){
    sum = 0

    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }

    return sum/arr.length;
}

console.log(promedio([2,2,7,6,4]));

7.
function arrImpar(){
    let arrImp = [];

    for( let i = 1; i<=50; i++){
        if(i%2 !== 0){
            arrImp.push(i); 
        }
    }
    return arrImp
}

console.log(arrImpar());

8.
function mayorY(arr,Y){

    let newarr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            newarr.push(arr[i]);
        }
    } 
    return newarr.length;
}

console.log(mayorY([1,3,5,7], 3));

9.
function square(arr){

    let newarr = [];
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i]*arr[i]
        newarr.push(arr[i]);
    }
    return newarr;
}

console.log(square([1,5,10,-2]));

10.
function noneg(arr){

    for(let i = 0; i < arr.length; i++){
        if(arr[i]<0)
        arr[i] = 0
    }

    return arr;
}

console.log(noneg([1,5,10,-2]));

11.
function MaxMinAvg(arr){

    let newarr = [];
    let max = arr[0];

        for(let i = 1; i < arr.length; i++){
            if(arr[i]>max){
                max = arr[i];
            }
        } 
    let min = arr[0]

        for(let i = 1; i < arr.length; i++){
            if(arr[i]<min){
                min = arr[i];
            }
        }

    let sum = 0

        for(let i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        
    newarr.push(max);
    newarr.push(min);
    newarr.push(sum/arr.length);
    return newarr;
}

console.log(MaxMinAvg([1,5,10,-2]));

12.
function swap(arr){

    let temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    return arr;

}

console.log(swap([1,5,10,-2]));

13.
function numString(arr){

    for(let i = 0; i <arr.length; i++){
        if(arr[i]<0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

console.log(numString([-1,-3,2]));
