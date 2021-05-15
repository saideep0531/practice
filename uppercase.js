function uppercase(str)
{
    var array  = str.split('');
    var new_array = [];
    for (var x=0;x<array.length;x++)
    {
        new_array.push (array[x].charAt(0).toUpperCase()+array[x].slice(1));
}
return new_array.join(' ');
}
console.log(uppercase("the quick brown fox"));