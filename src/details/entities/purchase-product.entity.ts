import { ProductEntity } from "../../product/entities/product.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { BaseEntity } from "./../../config/base.entity";

import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({ name: "purchasesProduct" })
export class PurchaseProductEntity extends BaseEntity {
  @Column()
  quantity!: number;
  @Column()
  totalPrice!: number;
  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseProducts)
  @JoinColumn()
  purchase!: PurchaseEntity;
  @ManyToOne(() => ProductEntity, (product) => product.purchaseProducts)
  @JoinColumn()
  product!: ProductEntity;
}
