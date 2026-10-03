const express = require('express')
const cors = require('cors')

require('dotenv').config()

const pool = require('./config/db')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)


app.get('/', (req, res) => {
  res.json({
    message: 'FailSense backend is running 🚀',
  })
})

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')

    res.json({
      message: 'PostgreSQL connection successful ✅',
      time: result.rows[0].now,
    })
  } catch (error) {
    console.error('Database connection error:', error)

    res.status(500).json({
      message: 'Database connection failed ❌',
      error: error.message,
    })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`FailSense server running on port ${PORT}`)
})