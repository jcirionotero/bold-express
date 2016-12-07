
/**
 * Created by Jesus Cirion on 12/7/2016.
 */

function generate() {
  const initialData = [
    {
      'url': 'http://doesNotExist.boldtech.co'
    },
    {
      'url': 'http://boldtech.co'
    },
    {
      'url': 'http://offline.boldtech.co'
    },
    {
      'url': 'http://google.com'
    }
  ];

  return initialData.map(server => {
    server.priority = Math.floor(Math.random() * 10);
    return server;
  }).sort((a, b) => {
    return a.priority - b.priority;
  });
}

module.exports = {
  generate: generate
};
