height = height/100
    let bmi = (weight/(height+height));
    bmi = bmi.toFixed(2);
    console.log (bmi);


    document.querySelector('#ca').innerHTML = bmi;
    let status = '';

    if (bmi < 18.5){
        status = "Underweight"

    }

    if (bmi >= 18.5 && bmi <25){
        status = "Normal Weight"
        
    }

    if (bmi > 25 && bmi < 30){
        status = "Overweight"
        
    }

    if (bmi >=30){
        status = "Obese"
        
    }