var jsonist = require('jsonist');
var leaderboard = require('lolking-leaderboard');
var isFunction = require('lodash.isfunction');

var ENDPOINT = 'http://www.lolking.net/leaderboards/_/';

// User-Agent required
var OPTIONS = {
  headers: {
    'User-Agent': 'lolking-lookup'
  }
};

function lolkingLookup(region, summoner, callback) {

  // default region
  if (isFunction(summoner)) {
    callback = summoner;
    summoner = region;
    region = 'na';
  }

  // get where this summoner is on the leaderboard
  jsonist.get(ENDPOINT + region + '/summoner/' + summoner + '.json', OPTIONS,
    function(error, res) {
      if (error) {
        callback(error);
        return;
      }

      // look up that page
      leaderboard(region, res.data.page, function(error, summs) {
        if (error) {
          callback(error);
          return;
        }

        var found = false;
        summs.data.forEach(function(summ) {
          if (summ.name === summoner || summ.summoner_id === summoner) {
            callback(null, summ);
            found = true;
          }
        });

        if (!found) {
          callback(null, null);
        }
      });
    });
}

module.exports = lolkingLookup;