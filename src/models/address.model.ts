
import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName:'users'
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    validate:{
      isUUID:{msg:'Az id nem egy megfelelő UUID4 formátum!',args:4}
    }
  })
  declare id1;

  @Column({
    validate:{
      notEmpty:{msg: 'A név nem lehet üres!'},
      notNull:{msg:'Adj meg egy nevet!'},
    },
    allowNull:false
  })
  declare name: string
}