import { hashSync, compareSync } from 'bcryptjs';

class BcryptService {
  // salt = 13

  public encrypt(text: string, salt: number) {
    return hashSync(text, salt);
  }

  public compare = (text: string, text2: string): boolean =>
    compareSync(text, text2);
}

export default BcryptService;