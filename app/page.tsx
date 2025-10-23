"use client"

import { useState, useEffect } from "react"
import UsersList from "@/components/users-list"
import UserProfile from "@/components/user-profile"
import AddUserModal from "@/components/add-user-modal"

interface User {
  id: string
  name: string
  email: string
  phone?: string
  firstName?: string
  lastName?: string
  yearOfBirth?: string
  gender?: string
  alternatePhone?: string
  address?: string
  pincode?: string
  domicileState?: string
  domicileCountry?: string
  school?: string
  degree?: string
  course?: string
  yearOfCompletion?: string
  grade?: string
  skills?: string
  projects?: string
  workExperience?: Array<{
    domain: string
    subDomain: string
    experience: string
  }>
  linkedinUrl?: string
  resume?: string
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"list" | "profile">("list")
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Load users from localStorage on mount
  useEffect(() => {
    const savedUsers = localStorage.getItem("users")
    if (savedUsers) {
      try {
        setUsers(JSON.parse(savedUsers))
      } catch (error) {
        console.error("Error loading users:", error)
      }
    } else {
      // Initialize with demo data
      const demoUsers: User[] = [
        {
          id: "1",
          name: "Dave Richards",
          email: "dave@mail.com",
          phone: "+91 8332883854",
        },
        {
          id: "2",
          name: "Abhishek Hari",
          email: "hari@mail.com",
          phone: "+91 8332883854",
        },
        {
          id: "3",
          name: "Nishta Gupta",
          email: "nishta@mail.com",
          phone: "+91 8332883854",
        },
      ]
      setUsers(demoUsers)
      localStorage.setItem("users", JSON.stringify(demoUsers))
    }
    setIsLoading(false)
  }, [])

  // Save users to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("users", JSON.stringify(users))
    }
  }, [users, isLoading])

  const handleAddUser = (newUser: Omit<User, "id">) => {
    const user: User = {
      ...newUser,
      id: Date.now().toString(),
    }
    setUsers([...users, user])
    setIsAddUserModalOpen(false)
  }

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((u) => u.id !== userId))
    if (selectedUserId === userId) {
      setCurrentPage("list")
      setSelectedUserId(null)
    }
  }

  const handleUpdateUser = (updatedUser: User) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)))
  }

  const handleViewUser = (userId: string) => {
    setSelectedUserId(userId)
    setCurrentPage("profile")
  }

  const handleBackToList = () => {
    setCurrentPage("list")
    setSelectedUserId(null)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {currentPage === "list" ? (
        <UsersList
          users={users}
          onAddUser={() => setIsAddUserModalOpen(true)}
          onViewUser={handleViewUser}
          onDeleteUser={handleDeleteUser}
        />
      ) : (
        <UserProfile
          user={users.find((u) => u.id === selectedUserId)!}
          onBack={handleBackToList}
          onUpdate={handleUpdateUser}
        />
      )}

      {isAddUserModalOpen && <AddUserModal onClose={() => setIsAddUserModalOpen(false)} onAdd={handleAddUser} />}
    </div>
  )
}
