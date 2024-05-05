import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";

import { UserEntity } from "../entities/user.entity";
import { UserDTO } from "../dto/user.dto";

export class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  async getAll(): Promise<UserEntity[]> {
    return (await this.execRepository).find();
  }

  async getOne(id: string): Promise<UserEntity | null> {
    return (await this.execRepository).findOneOrFail({ where: { id } });
  }
  async create(body: UserDTO): Promise<UserEntity> {
    return (await this.execRepository).save(body);
  }

  async update(id: string, body: UserDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body);
  }

  async delete(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
}
