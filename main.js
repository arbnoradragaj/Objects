// 1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods 
// for working with this object:

//A method that displays the car info 
//A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the
//  driver has to take a 1-hour break.

// let car = {
//     manufacturer: "BMW",
//     model: "M5",
//     year: 2020,
//     averageSpeed: 100,

//     showInfo: function()
//     {
//         console.log("Manufacturer: "+ this.manufacturer);
//         console.log("Model: "+ this.model);
//         console.log("Year: "+ this.year);
//         console.log("Average speed: "+ this.averageSpeed);
        
//     },

//     travelTime: function(distance)
//     {
//         let time= distance/ this.averageSpeed;
//         let breaks=0;

//         for (let i=4; i<=time; i+=4)
//         {
//             breaks++;
//         }

//         return time + breaks;
//     }
// }

// car.showInfo();
// console.log("time needed: ", car.travelTime(900), "hours");


// 2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions
//  for working with this object:

//A function for adding two fraction objects.
//A function for subtracting two fraction objects.
//A function for multiplying two fraction objects.
//A function for dividing two fraction objects.
//A function for simplifying a fraction object.


// let fraction1= 
// {
//     numerator: 2,
//     denominator: 5
// };

// let fraction2 = 
// {
//     numerator: 3,
//     denominator: 4
// };

// function simplify(frac)
// {
//     let num = frac.numerator;
//     let den = frac.denominator;
//     let gcd=1;

//     for(let i=1; i<=num && i <= den; i++)
//     {
//         if(num % i === 0 && den % i === 0)
//         {
//             gcd=i;
//         }
//     }

//     return {
//         numerator: num/ gcd,
//         denominator: den / gcd
//     };
// }

// function add(f1,f2)
// {
//     let num = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
//     let den = f1.denominator * f2.denominator;

//     return simplify({
//         numerator: num,
//         denominator: den
//     });
// }

// function subtract(f1,f2)
// {
//     let num = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
//     let den = f1.denominator * f2.denominator;

//     return simplify({
//         numerator: num,
//         denominator: den
//     });
// }

// function multiply(f1,f2)
// {
//     let num= f1.numerator * f2.numerator;
//     let den = f1.denominator * f2.denominator;

//     return simplify({
//         numerator:num,
//     denominator: den
//     });
// }

// function divide(f1,f2)
// {
//     let num= f1.numerator * f2.denominator;
//     let den = f1.denominator * f2.numerator;

//     return simplify(
//         {
//             numerator: num,
//             denominator: den
//         }
//     )
// }

// function format(frac)
// {
//     return frac.numerator + "/" + frac.denominator;
// }


// console.log(
//     format(fraction1) + " + "+ format(fraction2)+ " = "+ format(add(fraction1,fraction2))
// );

// console.log(
//     format(fraction1) + " - "+ format(fraction2)+ " = "+ format(subtract(fraction1,fraction2))
// );

// console.log(
//     format(fraction1) + " * "+ format(fraction2)+ " = "+ format(multiply(fraction1,fraction2))
// );

// console.log(
//     format(fraction1) + " / "+ format(fraction2)+ " = "+ format(divide(fraction1,fraction2))
// );



// 3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

//A method for displaying the time. 
//A method for changing the time by a given amount of seconds. 
//A method for changing the time by a given amount of minutes.  
//A method for changing the time by a given amount of hours. 
//Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», 
// we should get «20:31:15», not «20:30:75».


let time = {
    hours: 20,
    minutes: 30,
    seconds: 45,

    showTime: function()
    {
        let hour = this.hours;
        let min = this.minutes;
        let sec = this.seconds;

        if(hour<10)
        {
            hour="0"+hour;
        }
        if(min<10)
        {
            min = "0"+min;
        }
        if(sec<10)
        {
            sec="0"+sec;
        }

        console.log(hour + ":"+min+":"+sec);
    },

    changeSeconds: function(sec)
    {
        this.seconds = this.seconds + sec;

        while(this.seconds>=60){
            this.seconds = this.seconds - 60;
            this.minutes = this.minutes+1;
        }

        while(this.minutes>=60)
        {
            this.minutes=this.minutes - 60;
            this.hours = this.hours + 1;
        }

        while(this.hours>=24)
        {
            this.hours = this.hours - 24;
        }
    },


    changeMinutes: function(min)
    {
        this.minutes = this.minutes + min;

        while(this.minutes >=60)
        {
            this.minutes = this.minutes -60;
            this.hours = this.hours + 1;
        }

        while(this.hours>=24)
        {
            this.hours = this.hours - 24;
        }
    },

    changeHours: function(hrs)
    {
        this.hours = this.hours + hrs;

        while(this.hours >=24)
        {
            this.hours = this.hours - 24;
        }
    }

}


time.showTime();
time.changeSeconds(30);
time.showTime();

time.changeMinutes(40);
time.showTime();

time.changeHours(5);
time.showTime();