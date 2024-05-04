import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn({ name: "created_ad", type: "timestamp" })
  createAd!: Date;

  @UpdateDateColumn({ name: "update_ad", type: "timestamp" })
  updateAd!: Date;
}
