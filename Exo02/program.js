function pocketMoney(coins){
    let sortedMoney = coins.sort(function(a, b) {return a - b});
    let finalCoins = 0;
      for (let i = 0; i < sortedMoney.length; i++) {
          if (sortedMoney[i] > finalCoins + 1){
          return finalCoins + 1
      }
      finalCoins += sortedMoney[i]
      }
    return finalCoins + 1
  }

  exports.pocketMoney =  pocketMoney;
