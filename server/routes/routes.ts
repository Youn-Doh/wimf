import express from 'express'
// import { Welcome } from '../../models/welcome.ts'
import * as db from '../db/db.ts'

const router = express.Router()

// Fridge
router.get('/fridge', async (req, res) => {
  try {
    const fridgeList = await db.getFridge()
    res.json(fridgeList)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

router.post('/fridge', async (req, res) => {
  try {
    const newFridgeItem = req.body.newFridgeItem
    await db.addToFridge(newFridgeItem)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

router.delete('/fridge/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteFromFridge(id)
    res.sendStatus
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

router.patch('/fridge/edit/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const item = req.body.ingredients
    await db.editFridgeItem(id, item)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

// Freezer
router.get('/freezer', async (req, res) => {
  try {
    const freezerList = await db.getFreezer()
    res.json(freezerList)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

router.post('/freezer', async (req, res) => {
  try {
    const newFreezerItem = req.body.newFreezerItem
    await db.addToFreezer(newFreezerItem)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

router.delete('/freezer/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteFromFreezer(id)
    res.sendStatus
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

// Pantry
router.get('/pantry', async (req, res) => {
  try {
    const pantryList = await db.getPantry()
    res.json(pantryList)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

router.post('/pantry', async (req, res) => {
  try {
    const newPantryItem = req.body.newPantryItem
    await db.addToPantry(newPantryItem)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

router.delete('/pantry/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteFromPantry(id)
    res.sendStatus
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Something went wrong')
    }
  }
})

router.get('/recipe', async (req, res) => {
  try {
    const posts = await db.getRecipes()
    //console.log(posts)
    res.json(posts)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
