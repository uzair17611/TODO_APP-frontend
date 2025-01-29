const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db'); 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        process.exit(1);
    }
    console.log('✅ Connected to MySQL database.');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
});
