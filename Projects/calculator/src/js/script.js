 function insert(num){
     document.form.textview.value+= num;

     return num; 
 } 


 
 
 function clean(){

    document.form.textview.value = "";
 }


 function back(){

    var allData = document.form.textview.value;
    document.form.textview.value = allData.substring(0,allData.length - 1);
    return allData;
 }


 function equal(){

    var allData = document.form.textview.value;
    if(allData){

        document.form.textview.value = eval(allData);
    }


 }