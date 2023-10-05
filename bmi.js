const href = document.getElementById ('calculate');

href.addEventListener('click' , function(){

    let height  = document.querySelector('#height');
    let weight = document.querySelector('#height');

    if (weight == !! height == ''){
        alert('Enter your correct height and weight');
        return;
    }


    height = height/100
    let bmi = (weight/(height+height));
    bmi = bmi.toFixed(2);


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



});
