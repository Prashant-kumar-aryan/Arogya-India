function fibonacciGenerator (n) {
        let prev=0;
        var arr=[];
        if(n>2)
        {
        arr.push(0);
        arr.push(1);
        }
        for(let i =2;i<n;i++)
        {
            var curr=arr[i-1]+arr[i-2];
            arr.push(curr);
        }
    }
    
    