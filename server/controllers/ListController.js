import _boardService from '../services/BoardService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import ListService from '../services/ListService'

let _listService = new ListService().repository

export default class ListController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      //.get('/:id/tasks', this.getAllTasks)
      // .get('/:id', this.getById)
      .post('/', this.create)
      // .put('/:id', this.edit)
      .delete('/:id', this.delete)
    // .use(this.defaultRoute)
  }



  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let newList = await _listService.create(req.body)
      return res.send(newList)
    }
    catch (err) { next(err) }
  }

  async delete(req, res, next) {
    try {
      let data = await _listService.findOneAndRemove({ _id: req.params.id, authorId: req.session.uid })
      if (data) {
        return res.send("List Deleted")
      }
    }
    catch (err) { next(err) }
  }

}


