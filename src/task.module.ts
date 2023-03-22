// app.module.ts

import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Task, TaskSchema } from './schemas/task.schema'
import { TaskContoller } from './task.controller'
import { TaskService } from './tasks.service'
const uri =
  'mongodb+srv://Lautaro:Lautaro77@cluster0.wxyrplb.mongodb.net/tasksDB?retryWrites=true&w=majority'
@Module({
  imports: [
    MongooseModule.forRoot(uri),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  providers: [TaskService],
  controllers: [TaskContoller],
})
export class TaskModule {}
