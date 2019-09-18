import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  title: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true }
}, { timestamps: true })

//CASCADE ON DELETE
_schema.pre('deleteMany', function (next) {
  //lets find all the lists and remove them
  Promise.all([
    //_taskService.deleteMany({ listId: this._conditions_id }),
  ])
    .then(() => next())
    .catch(err => next(err))
})

//CASCADE ON DELETE
_schema.pre('findOneAndRemove', async function () {
  //lets find all the lists and remove them
  try {
    Promise.all([
      _taskRepo.deleteMany({ boardId: this._conditions._id })
    ])
  } catch (error) { next(err) }
})


export default class ListService {
  get repository() {
    return mongoose.model('List', _schema)
  }
}