const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

// PostgreSQL connection (Hardcoded)
const pool = new Pool({
    user: "postgres",// dataabse user
    host: "localhost",
    database: "job_db",//your database name
    password: "your_password", // Change this to your server password
    port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// 🟢 API to Post a Job
app.post("/api/jobs", async (req, res) => {
    const { title, company, location, skills } = req.body;
    try {
        await pool.query(
            "INSERT INTO jobs (title, company, location, skills) VALUES ($1, $2, $3, $4)",
            [title, company, location, skills]
        );
        res.json({ success: true, message: "Job posted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database Error" });
    }
});

// 🟢 API to Get All Jobs
app.get("/api/jobs", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM jobs");
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database Error" });
    }
});

// 🟢 API to Search Jobs by Skills
app.get("/api/jobs/search", async (req, res) => {
    const { skills } = req.query;
    if (!skills) {
        return res.status(400).json({ error: "Skills are required" });
    }

    const skillArray = skills.split(",").map(skill => skill.trim());

    try {
        const result = await pool.query(
            "SELECT * FROM jobs WHERE skills && $1",
            [skillArray]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database Error" });
    }
});

// Start Server
app.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));
