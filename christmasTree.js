let n = 5;
let pattern = '';
let index = 0;
//first |
for(first = 0;first<=n;first++){
    //add n times blank space
    pattern = pattern + ' '
}
//in middle is the |
pattern = pattern + '|'
//rest of symbols
for(i=1;i<n;i++){
    //first add a new line
    pattern = pattern + '\n';
    /*we need a variable (index) to count how many
    times we add blank space (for each line the number is 
    going to be smaller, because of the more stars)*/
    index++;

    for(space=index;space<=n;space++){
        //add blank space
        pattern = pattern + ' ';
    }

    for(a=0;a<i;a++){
        //this one adds stars BEFORE the line |
        //a is compared to i, because i doen't reset
        pattern = pattern + '*';
        
    }
    //add line in the middle
    pattern = pattern + '|';
    for(b=0;b<i;b++){
        //this one is for AFTER the line
        pattern = pattern + '*';
    }
}
//print
console.log(pattern)