export type UserRole = 'ADMIN' | 'SALES_REP'

export interface User {
  id: string
  name: string
  phone: string
  role: UserRole
  email?: string
  createdAt: string
  updatedAt: string
}

export interface CreateUserInput {
  name: string
  phone: string
  role: UserRole
  email?: string
}

export interface UpdateUserInput extends CreateUserInput {
  // Same as CreateUserInput for now, might add more fields later
}
