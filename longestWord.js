function find_longest_word(str)
{
  var array1 = str.split(" ");
  console.log(array1)
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  console.log("Longest word in given %s is %s",str, result)
  return result;
}

console.log(find_longest_word('Web Development Tutorial'));
