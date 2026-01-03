import _app from './app'


const start = async () => {
  try {
    await _app.listen({ port: 3000, host: '0.0.0.0'});
  } catch (err) {
    _app.log.error(err);
    process.exit(1);
  }
};

start();



// _app.listen({ port: 3000 }, () => {
//     console.log("🚀 Server running on http://localhost:3000");
// });