function palin(string)
{
    var array=string.split('');
    var revarray =array.reverse();
    var reversestring = revarray.join('');
     if (string==reversestring)
     {
         console.log("palin");

     }
     else console.log("not palin");
}
var string= "madam";
palin(string);





