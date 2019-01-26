// Use the CDN or host the script yourself
// https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js
// https://matthewelsom.com/assets/js/libs/instafeed.min.js

var userFeed = new Instafeed({
  get: 'user',
  userId: '7332909379',
  clientId: '06f27e31d8674948bb63a36cccb7a148',
  accessToken: '7332909379.06f27e3.dc8b5b14c600478a9a8595777020444c',
  resolution: 'low_resolution',
  template: '<div class="col-md-4 col-sm-12 col-xs-12"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>',
  sortBy: 'most-recent',
  limit: 6,
  links: false
});
userFeed.run();