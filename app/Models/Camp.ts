import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Camp extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public type: string

  @column({ isPrimary: true })
  public nome: string

  @column({ isPrimary: true })
  public desc: string

  @column({ isPrimary: true })
  public val_ent: string

  @column({ isPrimary: true })
  public val_prem: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
