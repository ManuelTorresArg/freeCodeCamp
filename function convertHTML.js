function convertHTML(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g,'&apos;');
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Sixty > twelve"));
  console.log(convertHTML("Schindler's List"));