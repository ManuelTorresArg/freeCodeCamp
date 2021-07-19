// Only change code below this line
function urlSlug(title) {

    return title.trim().replace(/[ ]+/g," ").split(" ").map( elem => elem!=" " ? elem.toLowerCase(): null).join("-");
  
  
  }
  // Only change code above this line

  console.log(urlSlug(" Winter  Is  Coming "));