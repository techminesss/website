const app = require('./src/app');
const { PORT } = require('./src/config/env');

app.listen(PORT, () => {
  console.log(`\n🚀 TechMines API running on http://localhost:${PORT}\n`);
});
