import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async getByEmail(uno: number) {
    /*const user = await this.usersRepository.findOne({ uno });
    if (user) {
      return user;
    }
    throw new HttpException(
      '사용자 계정이 존재하지 않습니다.',
      HttpStatus.NOT_FOUND,
    );*/
  }

  async createUser(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
