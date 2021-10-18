1. Line 12 outputs the value 3, it means that the variable `i` has be ran three times in the for loop in `discountPrices` and exited the loop when i > prices.length (which happens to be 3) 

2. Line 13 outputs the value 150, which is the value of the last element in discounted price array. 

3. Line 14 ouptus the value 150, it is the variable declared by var `finalPrice` after it reaches line 14, it carries the value 150. 
4. Returns the array [50, 100, 150]. The for loop calculate the discounted price from the array of prices given, which is `price` *0.50 and thus the return value 

5. Line 12 returns error since `i` is outside of the scope at line 12

6. Line 13 returns error since `discountPrices` is declared with let and it is being accessed outside of its scope 

7. Line 14 prints the value 150 since `finalPrice` is declared with let and it is within scope so no error will occur 

8. Returns theh array [50, 100, 150], `discounted` is declared with let and it is within scope, no error will occur 

9. Line 11 returns error since variable `i` is declared with let and accessed outside of scope 

10. Line 12 prints value 3 since `length` is declared with const and its value never changed 

11. Returns the discountedPrice array [50,100,150]. It is being declared by const and called within scope. 

12. 

a. student.name 

b. student['Grad Year']

c. student.greeting()

d. student['Favorite Teacher'].name

e. student.courseLoad[0]


13. 

a. outputs the string `32`. Output was converted into string and concatenate
 
b. Outputs the number  `1`.  The string was converted into number and calculated the value of 3-2=1

c. Outputs the number `3`. null does not effect anything 

d. Outputs the string `3null`. as the `null` will be considered a string concatenate to `3`

e. Outpus the number `4`. value of `true` will be considered as the numeric value `1` and added to 3, therefore 4. 

f. Outputs the number `0`. Here the `null` will be considered the number 0, therefore when added together we get 0 

g. Outputs the string `3undefined`. This will be the string `3` and the string `undefined` concatenate together. 

h. NaN. This is an undefined number, such numeric calculation does not work in JavaScript 

14. 

a. Outputs `true`. string `2` is treated as a number and compared with the number `1` which is smaller, thus true. 


FFT

b. Outputs `false`. Comparing the string value, we get '2'>'12' thus false. 

c. Outputs `true`. As the '2' will be treated as number 2 and `2==2` is true. 

d. Outputs `false`. the `===` operator is a strong comparison w/o type conversion, so string '2' is different from number 2

e. Outputs `false`. `true` is the number 1, which is different from the number 2.


f. Outputs `true`. number 2 will be convert into the boolean true, where `true==true` will be evaluated to true. 


15. `==` compares the value on both sides ignoring the datatypes. `===` is a stronger comparison which only returns true when both the value and datatype matches. 


16. part2-question16.js

17. Final result will print array [2,4,6]. 
`modifyArray` called with parameters [1,2,3], and function `doSomething`, where the function `modifyArray` runs first and create the array with values 1,2,3 in, after that, the values [1,2,3] will be passed to `doSomething` which doubles all the values, thus the final array [2,4,6]


18. see part2-question18.js

19. The output will be: 
    1
    4
    3
    2
    











 
