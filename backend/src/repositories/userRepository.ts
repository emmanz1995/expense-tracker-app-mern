import User from '../models/user.model';
import { IUser } from '../interfaces/userInterface';

class UserRepository {
  db = User;
  async findOne(email: string) {
    const user = await this.db.findOne({ email: email });
    return user;
  }

  async create(userData: IUser) {
    const { name, username, email, password } = userData;
    const createUser = await this.db.create({ name, username, email, password });
    return createUser;
  }
}

export default UserRepository;