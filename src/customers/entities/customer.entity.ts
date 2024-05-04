import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { BaseEntity } from "./../../config/base.entity";

import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity({ name: "customers" })
export class CustomerEntity extends BaseEntity {
  @Column()
  address!: string;
  @Column()
  dni!: number;

  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;

  @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
  purchase!: PurchaseEntity[];
}
