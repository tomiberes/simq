## School work for System integration course:

A demo for message queue use.

amqp library documentation [documentation](http://www.squaremobius.net/amqp.node/channel_api.html) and [examples](https://github.com/squaremo/amqp.node/blob/master/examples/)


### Setup:

NodeJS v4.2.1 or higher is required.

Install dependencies with: `npm install`

Note: rabbitmq message broker have to be running on `localhost`.

Start with spinning three web server processes: `npm start`

This command will start three web servers:

`localhost:3001` first consumer application.

`localhost:3002` second consumer application.

`localhost:4000` producer application.

To stop the processes use: `npm stop`
