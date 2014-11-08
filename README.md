# lolking-lookup

[![Build Status][travis-svg]][travis]

Look up a summoner on Lolking's leaderboard.

## Example

``` javascript
var lookup = require('lolking-lookup');

lookup('na', 'PownShop', function(error, data) {
  if (error) {
    throw error;
  }

  console.log(data);
  // => {
  // =>   region: 'na',
  // =>   summoner_id: 26317615,
  // =>   global_ranking: '4143122',
  // =>   ranking: '952603',
  // =>   lks: '1100',
  // =>   tier: '3',
  // =>   division: '1',
  // =>   league_points: '40',
  // =>   wins: '37',
  // =>   losses: '37',
  // =>   previous_ranking: '949720',
  // =>   tier_name: 'BRONZE',
  // =>   name: 'PownShop',
  // =>   profile_icon_id: 4,
  // =>   most_played_champions: [
  // =>     {
  // =>       champion_id: '1',
  // =>       kills: '72',
  // =>       deaths: '103',
  // =>       assists: '123',
  // =>       wins: '8',
  // =>       losses: '8',
  // =>       played: '16',
  // =>       creep_score: '1098' },
  // =>     {
  // =>       champion_id: '82',
  // =>       kills: '87',
  // =>       deaths: '93',
  // =>       assists: '103',
  // =>       wins: '6',
  // =>       losses: '8',
  // =>       played: '14',
  // =>       creep_score: '1743' },
  // =>     {
  // =>       champion_id: '412',
  // =>       kills: '13',
  // =>       deaths: '53',
  // =>       assists: '85',
  // =>       wins: '3',
  // =>       losses: '4',
  // =>       played: '7',
  // =>       creep_score: '293'
  // =>     }
  // =>   ]
  // => }
});
```

## Installation

``` bash
$ npm install lolking-lookup
```

## API

``` javascript
var lookup = require('lolking-lookup');
```

### `lookup([region='na'], summoner, callback)`

Calls `callback(error, data)`, wherein `error` is any _Error_ encountered and
`data` is an _Object_ containing information from Lolking's leaderboard on
_String_ `summoner` in _String_ region.


   [travis]: https://travis-ci.org/KenanY/lolking-lookup
   [travis-svg]: https://img.shields.io/travis/KenanY/lolking-lookup.svg