let nums = [3, 2, 4, 1];
let maxSuma = 0; 
let cont = ""; 

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) { 
        let suma = nums[i] + nums[j];
        cont += nums[i] + " + " + nums[j] + " = " + suma + "\n"; 
        if (suma > maxSuma) { 
            maxSuma = suma;
        }
    }
}

alert(cont + "\nEl número mayor es: " + maxSuma);