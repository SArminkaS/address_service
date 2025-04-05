
import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName:'users'
})
export class User extends Model {
  @Column({
    primaryKey: true,
    allowNull:false,
    validate:{
      notEmpty:{msg: 'A felhasználónév nem lehet üres!'},
      notNull:{msg:'Adj meg egy felhasználónév!'}
    },
  })
  declare username: string;

  @Column({
    validate:{
      notEmpty:{msg: 'A jelszó nem lehet üres!'},
      notNull:{msg:'Adj meg egy jelszót!'}
    },
    allowNull:false
  })
  declare password: string
}