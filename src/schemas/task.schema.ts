import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TaskDocument = HydratedDocument<Task>

@Schema()
export class Task {
  @Prop({ required: true })
  task: string

  @Prop({ required: true })
  finalizada: boolean
}
export const TaskSchema = SchemaFactory.createForClass(Task)
