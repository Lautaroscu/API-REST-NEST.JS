import { Injectable } from '@nestjs/common'
import mongoose from 'mongoose'
@Injectable()
export class Connection {
  protected uri: string =
    'mongodb+srv://Lautaro:Lautaro77@cluster0.wxyrplb.mongodb.net/tasksDB'

  getConnection = () => {
    return mongoose
      .connect(this.uri)
      .then(() => console.log('Conexión exitosa a la base de datos'))
      .catch((err) => console.error(err))
  }
}
