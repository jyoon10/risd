var sequence = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for(i=0;i<sequence.length;i++){
  if(sequence[i]==thisPage){
    $("a").attr("href",sequence[i+1]+".html");
    if(i==sequence.length-1) {
      $("a").attr("href",sequence[0]+".html");
    }
  }
}
