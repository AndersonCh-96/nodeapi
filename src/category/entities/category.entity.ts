import { ProductEntity } from "../../product/entities/product.entity";
import { BaseEntity } from "./../../config/base.entity";

import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: "categories" })
export class CategoryEntity extends BaseEntity {
  @Column()
  name!: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  product!: ProductEntity[];
}
