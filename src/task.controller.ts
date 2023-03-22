import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common'
import { TaskService } from './tasks.service'
import { Task } from './schemas/task.schema'

@Controller('tasks')
export class TaskContoller {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll(@Query('sort') sort: string , @Query('order') order : string)
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOne(id)
  }

  @Post()
  async create(@Body() todo: Task): Promise<Task> {
    const { task, finalizada } = todo
    return this.taskService.create({ task, finalizada })
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Task> {
    return this.taskService.delete(id)
  }
  @Put(':id')
  async update(@Param('id') ID: string, @Body() todo: Task): Promise<Task> {
    return this.taskService.update(todo, ID)
  }
}
