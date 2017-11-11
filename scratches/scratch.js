localBets.forEach();

var betsIterator = bet => {
    activeSels.forEach(sellsIterator);
}

var sellsIterator = sel => {
    if(bet.selection === sel._id) {
        let newOdds = this.backOddsMultiplied(sel);
        if(bet.odds !== newOdds){
            bet.oddsChanged = true;
            bet.odds = newOdds;
            changed = true;
        }
    }
}

