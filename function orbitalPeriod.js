function orbitalPeriod(arr) { 

    var arrResult = [];

  for( let i=0 ; i<arr.length ; i++){
        var GM = 398600.4418;
        var earthRadius = 6367.4447;
        let auxCalc =Object.values(arr[0])[1]+earthRadius;

        var orbitalPeriodCalc = Math.round(2*Math.PI*(Math.sqrt((Math.pow(auxCalc,3)/GM))));
        arrResult.push({name:Object.values(arr[0])[0],orbitalPeriod:orbitalPeriodCalc});
  }

    return arrResult
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));