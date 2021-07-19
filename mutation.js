function mutation(arr) {
    return arr[0].toUpperCase().includes(arr[1].toUpperCase());
  }
  
  console.log(mutation(["hello", "hey"]));