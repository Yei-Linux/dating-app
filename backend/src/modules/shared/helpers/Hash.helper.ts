import bcrypt from 'bcrypt';

class HashHelper {
  constructor(private password: string) {}

  comparePass(passwordHashedToCompare: string) {
    return bcrypt.compareSync(this.password, passwordHashedToCompare);
  }

  hash(salt: number) {
    return bcrypt.hashSync(this.password, salt);
  }
}

export const hashHelper = (password: string) => {
  return new HashHelper(password);
};
