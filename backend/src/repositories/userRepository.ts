import User from '../models/user.model';
import { IUser } from '../interfaces/userInterface';

class UserRepository {
  constructor(private db: typeof User) {
    this.db = db;
  }

  async findOne(userData: IUser) {
    const user = await this.db.findOne({ email: userData.email });
    return user;
  }
}

export default UserRepository;