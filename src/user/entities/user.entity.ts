import { CustomerEntity } from "../../customers/entities/customer.entity";
import { BaseEntity } from "./../../config/base.entity";

import { Column, Entity, OneToOne } from "typeorm";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @Column()
  name!: string;
  @Column()
  lastName!: string;
  @Column()
  email!: string;
  @Column()
  password?: string;
  @Column({ nullable: true })
  city?: number;

  @Column({ nullable: true })
  province?: string;

  @OneToOne(() => CustomerEntity, (customer) => customer.user) // specify inverse side as a second parameter
  customer!: CustomerEntity;
}
