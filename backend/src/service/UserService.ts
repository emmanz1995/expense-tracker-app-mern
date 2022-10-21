import UserRepository from '../repositories/userRepository';
import { IUser } from '../interfaces/userInterface';

class UserService {
  constructor(private userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async getOne(email: string) {
    const response = await this.userRepository.findOne(email);
    return response;
  }
  async createUser(userData: IUser) {
    const { name, username, email, password } = userData;
    const response = await this.userRepository.create({ name, username, email, password });
    return response;
  }

  async signInUser(userData: IUser) {
    const { email, password } = userData;
    const user = await this.userRepository.findOne(email);
    return user
  }
}

export default UserService;