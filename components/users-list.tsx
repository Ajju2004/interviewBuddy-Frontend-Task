"use client"

import Header from "./header"
import { Button } from "@/components/ui/button"

interface User {
  id: string
  name: string
  email: string
  phone?: string
}

interface UsersListProps {
  users: User[]
  onAddUser: () => void
  onViewUser: (userId: string) => void
  onDeleteUser: (userId: string) => void
}

export default function UsersList({ users, onAddUser, onViewUser, onDeleteUser }: UsersListProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Users" />

      <main className="p-6">
        <div className="bg-white rounded-lg border border-border">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Users</h2>
            <Button onClick={onAddUser} className="bg-[#6834FF] text-primary-foreground hover:bg-[#6834FF]">
              <span className="mr-2">+</span> Add user
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Sr. No</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">User name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">E-mail</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition">
                    <td className="px-6 py-4 text-sm text-foreground">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{user.email}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onViewUser(user.id)}
                          className="p-1 hover:bg-muted rounded transition"
                          title="View"
                        >
                          <svg
                            className="w-5 h-5 text-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => onDeleteUser(user.id)}
                          className="p-1 hover:bg-destructive/10 rounded transition"
                          title="Delete"
                        >
                          <svg
                            className="w-5 h-5 text-destructive"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {users.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-muted-foreground">No users found. Click "Add user" to create one.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
