import { CategoryEntity } from "../../category/entities/category.entity";
import { PurchaseProductEntity } from "../../details/entities/pruchase-product.entity";
import { BaseEntity } from "./../../config/base.entity";

import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: "products" })
export class ProductEntity extends BaseEntity {
  @Column()
  name!: string;
  @Column()
  description!: string;

  @Column()
  price!: number;

  @ManyToOne(() => CategoryEntity, (category) => category.product) // specify inverse side as a second parameter
  @JoinColumn()
  category!: CategoryEntity;

  @OneToMany(
    () => PurchaseProductEntity,
    (purchaseProducts) => purchaseProducts.product
  )
  purchaseProducts!: PurchaseProductEntity[];
}
