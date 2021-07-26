const changeType = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }

  var change = {
    "PENNY": 0,
    "NICKEL": 0,
    "DIME": 0,
    "QUARTER": 0,
    "ONE": 0,
    "FIVE": 0,
    "TEN": 0,
    "TWENTY": 0,
    "ONE HUNDRED": 0
  }
  
  
  function sumChange (obj) {    

    let total=0;
    for(let i=0;i<obj.length;i++){
        total+=obj[i][1];
    }

    return total;

  }

  function changeCalc(diff,cid,changeType) {

    var myChange = {};

    for(let i=8 ; i>=0 ; i--) {
    
        while(diff>=Object.values(cid)[i][1] && Object.values(cid)[i][1]>0 && diff>0){
            diff=diff-Object.values(changeType)[i];
            diff=diff.toFixed(2);
            if(!(Object.keys(change)[i] in myChange))
            myChange[Object.keys(change)[i]]=Object.values(changeType)[i]
            else myChange[Object.keys(change)[i]]+=Object.values(changeType)[i];
 
        }
    }

    return myChange;//Object.keys(myChange).map( (key) => [String(key),change[key]]);
  }


const checkCashRegister = (price, cash , cid) => {
    var diff=cash-price;
    return sumChange(cid)==diff ? {resultArraystatus: "CLOSED", change: cid} : sumChange(cid)<diff ?
                                {status: "INSUFFICIENT_FUNDS", change: []} : {status: "OPEN", change: changeCalc(diff,cid,changeType)};

} 

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
// ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

 //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
 //["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

 console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
 ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

