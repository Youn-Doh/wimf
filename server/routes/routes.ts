import express from 'express'
// import { Welcome } from '../../models/welcome.ts'
import * as db from '../db/db.ts'

const router = express.Router()

// GET /api/v1/welcome/
router.get('/freezer', async (req, res) => {
  try {
    const posts = await db.getFreezer()

    res.json(posts)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.get('/fridge', async (req, res) => {
  try {
    const posts = await db.getFridge()

    res.json(posts)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.get('/freezer', async (req, res) => {
  try {
    const posts = await db.getPantry()
    //console.log(posts)
    res.json(posts)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
