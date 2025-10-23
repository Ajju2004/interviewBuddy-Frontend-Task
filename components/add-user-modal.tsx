
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface AddUserModalProps {
  onClose: () => void
  onAdd: (user: { name: string; email: string; phone: string }) => void
}

export default function AddUserModal({ onClose, onAdd }: AddUserModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.phone) {
      onAdd(formData)
      setFormData({ name: "", email: "", phone: "" })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-white shadow-lg flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">Add User</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded transition">
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4 flex-1">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Name of the user</label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Contact</label>
            <input
              type="tel"
              name="phone"
              placeholder="Type here"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </form>
        <div className="p-6 border-t border-border flex justify-end gap-3">
          <Button type="button" onClick={onClose} variant="outline" className="border-border bg-transparent">
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit} className="bg-[#6834FF] text-primary-foreground hover:bg-[#6834FF]">
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
