1. the bug is within the type of the variable used for the user to enter.  `num1` and `num2` are both of type string, therefore the result is also set to type string, which will just be a single string concat, in which case entering 1 + 2 we get 12. 


2. a quich fix is just to typecast the variable `num1` and `num2` both into the number type first, then proceed with the original logic of adding two numerical values together for the result. 