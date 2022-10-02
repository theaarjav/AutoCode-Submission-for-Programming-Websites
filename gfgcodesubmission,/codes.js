module.exports={
    answers:[
        `int max=arr[0];
	    int max_2=0;
	    for(int i=1;i<n;i++){
	        if(arr[i]>max){
	           // max_2=max;
	            max=arr[i];
	        }
	    }
	    for(int i=0;i<n;i++){
	        if(arr[i]<max && arr[i]>max_2){
	            max_2=arr[i];
	        }
	    }
	    if(max_2)
	    return max_2;
	    return -1;`
    ]
}




codes={
    "1st":{
        
    }
}
