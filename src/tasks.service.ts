import { Injectable, Paramtype } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Connection } from './connect'
import { Task, TaskDocument } from './schemas/task.schema'

@Injectable()
export class TaskService {
  private connection: Connection
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {
    this.connection = new Connection()
    this.connection.getConnection()
  }

  async findAll(sort: string, order: string): Promise<Task[]> {
    const sortOrder = order === 'desc' ? -1 : 1
    return this.taskModel.find().sort({ sort: sortOrder }).exec()
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec()
  }
  async create(todo: Task): Promise<Task> {
    const { task, finalizada } = todo
    const created = new this.taskModel({ task, finalizada })
    return created.save()
  }
  async delete(id: string): Promise<Task> {
    return this.taskModel.findByIdAndRemove(id).exec()
  }
  async update(todo: Task, ID: string): Promise<Task> {
    const { task, finalizada } = todo

    return this.taskModel.findByIdAndUpdate(
      { _id: ID },
      { $set: { task: task, finalizada: finalizada } },
      { returnOriginal: false }
    )
  }
}
