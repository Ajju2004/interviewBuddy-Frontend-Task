"use client"

import { useState } from "react"
import Header from "./header"
import BasicInfoTab from "./tabs/basic-info-tab"
import EducationSkillsTab from "./tabs/education-skills-tab"
import ExperienceTab from "./tabs/experience-tab"
import { Button } from "@/components/ui/button"

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

interface UserProfileProps {
  user: User
  onBack: () => void
  onUpdate: (user: User) => void
}

type TabType = "basic" | "education" | "experience"

export default function UserProfile({ user, onBack, onUpdate }: UserProfileProps) {
  const [activeTab, setActiveTab] = useState<TabType>("basic")
  const [editedUser, setEditedUser] = useState<User>(user)

  const handleSave = () => {
    onUpdate(editedUser)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="p-6">
        <button onClick={onBack} className="mb-6 text-primary hover:text-primary/80 transition flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Users
        </button>

        <div className="bg-white rounded-lg border border-border p-6 mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-16 h-16 text-primary" fill="none" stroke="#6834FF" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">{editedUser.name}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <span>{editedUser.email}</span>
                <button className="p-1 hover:bg-muted rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-muted-foreground">{editedUser.phone}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-6">
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab("basic")}
                className={`pb-3 px-1 font-medium transition relative ${
                  activeTab === "basic" ? "text-[#6834FF]" : "text-muted-foreground hover:text-[#6834FF]"
                }`}
              >
                Basic info
                {activeTab === "basic" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6834FF]"></div>}
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`pb-3 px-1 font-medium transition relative ${
                  activeTab === "education" ? "text-[#6834FF]" : "text-muted-foreground hover:text-[#6834FF]"
                }`}
              >
                Education & skills
                {activeTab === "education" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6834FF]"></div>}
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`pb-3 px-1 font-medium transition relative ${
                  activeTab === "experience" ? "text-[#6834FF]" : "text-muted-foreground hover:text-[#6834FF]"
                }`}
              >
                Experience
                {activeTab === "experience" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6834FF]"></div>
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "basic" && <BasicInfoTab user={editedUser} onUpdate={setEditedUser} />}
          {activeTab === "education" && <EducationSkillsTab user={editedUser} onUpdate={setEditedUser} />}
          {activeTab === "experience" && <ExperienceTab user={editedUser} onUpdate={setEditedUser} />}

          {/* Save Button */}
          <div className="mt-8 flex justify-end gap-3">
            <Button onClick={onBack} variant="outline" className="border-border bg-transparent">
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-[#6834FF] text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
