export interface User {
  id: number;
  name?: string;
  email: string;
  password: string;
}

export const users: User[] = [
  { id: 1, name: 'Teste', email: 'teste@teste.com', password: '123456' },
  { id: 2, name: 'User', email: 'user@reqres.in', password: 'pistol' },
];
