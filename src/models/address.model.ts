
import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName:'addresses'
})
export class Address extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    validate:{
      isUUID:{msg:'Az id nem egy megfelelő UUID4 formátum!',args:4}
    }
  })
  declare id: string;

  @Column({
    validate:{
      notEmpty:{msg: 'A cím nem lehet üres!'},
      notNull:{msg:'Adj meg egy címet!'},
    },
    allowNull:false
  })
  declare address: string
}