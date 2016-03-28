var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  var params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video',
    channelId: options.channelId,
    maxResults: options.maxResults,
    pageToken: options.nextPageToken
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data); }
    })
    .catch(function(error) {
      console.error(error);
    });
};
