import { CustomerEntity } from "../../customers/entities/customer.entity";
import { PurchaseProductEntity } from "../../details/entities/pruchase-product.entity";
import { BaseEntity } from "./../../config/base.entity";

import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: "purchases" })
export class PurchaseEntity extends BaseEntity {
  @Column()
  status!: string;
  @Column()
  paymentMethod!: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.purchase)
  @JoinColumn()
  customer!: CustomerEntity;

  @OneToMany(
    () => PurchaseProductEntity,
    (purchaseProducts) => purchaseProducts.purchase
  )
  purchaseProducts!: PurchaseProductEntity[];
}
