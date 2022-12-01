const Find_Digits = (N) => 
{
    let count = 0;
    while(N != 0) {
        N = Math.floor(N / 10);
        count++; 
    }

    console.log('1.The count of digits in the number',count);
};

Find_Digits(1234);

const Find_Five = (N) => 
{
	let count = 0;
    while(N != 0) {
        if((N%10) === 5) {
            count++;
        }
        
        N = Math.floor(N/10);
    }

	console.log('2.The number of five occurs are',count);
};

Find_Five(345654);

const findSum = (n) => {
    let sum = 0;
    for(let i = 1; i<=n; i++) {
        if(i % 2 === 0) {
            sum = sum + i;
        }
    }
    
    console.log('3.The sum of all even integers',sum);
};

findSum(6);

const Number_Sum = (N) => 
{
    let sum = 0;
	while(N != 0) {
        sum = sum + (N % 10);
        N = Math.floor(N/10);
	}
	
	console.log('4.The sum of digits in number',sum);
};

Number_Sum(1234);

const Print_Odd = (N) => 
{
    console.log('5.The odd numbers:')
    for(let i = 2; i<=N; i++) {
        if(i === 2) 
        {
            console.log(i);
        } else if(i%2 != 0) {
            console.log(i);
        }
    }
};

Print_Odd(10);

const Print_pattern = (N) => 
{
    console.log('6.The pattern')
    let string = '';
    for(let i =1; i<=N; i++) {
        for(let j = 1; j<=i; j++) {
            string+='*';
        }
        string+='\n';
    }
    
    console.log(string);
};

Print_pattern(5);

const Prime_Check = (N) => 
{
    let count=0;
    if(N===1){
        console.log('7.The number is prime:',"NO");
    }
    else{
        for(let i=2;i<=N;i++){
            if(N%i===0) {
                count++;
            }
        }
    }
    if(count===1){
        console.log('7.The number is prime:',"YES");
    }
    else{
        console.log('7.The number is prime:',"NO");
    } 
};

Prime_Check(7);

const printNumbers = (n) => {
    console.log('8.The integers are')
    for(let i = 1; i<=n; i++) {
        console.log(i);
    }
};

printNumbers(4);

const Print_Table = (N) => 
{
    console.log('9.The multiplication table')
	for(let i = 1; i<=10 ;i++) {
	  console.log(N + ' * ' + i + ' = ' + (N*i));
	}
};

Print_Table(3);