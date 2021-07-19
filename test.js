lastSurvivor=(l,c)=>c.reduce((a,v)=>a.slice(0,v++)+a.slice(v),l)

  console.log(lastSurvivor('abc', [1, 1]));
  console.log(lastSurvivor('kbc', [0, 1]));
