export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  await new Promise(res => setTimeout(res, 200))
  return {
    id,
    name: 'Andres Chacon',
    location: 'Cuenca, Ecuador',
    role: 'Developer'
  }
}