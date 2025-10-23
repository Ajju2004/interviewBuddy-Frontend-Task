"use client"

interface User {
  id: string
  name: string
  email: string
  workExperience?: {
    domain: string
    subDomain: string
    experience: string
  }[]
  linkedin?: string
  resume?: string
  [key: string]: any
}

interface ExperienceTabProps {
  user: User
  onUpdate: (user: User) => void
}

export default function ExperienceTab({ user, onUpdate }: ExperienceTabProps) {
  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updatedExperience = [...(user.workExperience || [])]
    updatedExperience[index] = { ...updatedExperience[index], [field]: value }
    onUpdate({ ...user, workExperience: updatedExperience })
  }

  const handleLinkedInChange = (value: string) => {
    onUpdate({ ...user, linkedin: value })
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onUpdate({ ...user, resume: file.name })
    }
  }

  return (
    <div className="space-y-8">
      {/* Work Experience */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Work Experience</h3>
          <button className="p-2 hover:bg-muted rounded transition">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </div>

        {(user.workExperience || [ {}, {} ]).map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-foreground mb-2">Domain</label>
              <input
                type="text"
                placeholder="e.g. Technology"
                onChange={(e) => handleExperienceChange(index, "domain", e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="mt-3">
                <label className="block text-sm font-medium text-foreground mb-2">Sub-domain</label>
                <input
                  type="text"
                  placeholder="e.g. MERN Stack"
                  onChange={(e) => handleExperienceChange(index, "subDomain", e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="col-span-1 flex flex-col justify-end">
              <label className="block text-sm font-medium text-foreground mb-2">Experience</label>
              <select
                onChange={(e) => handleExperienceChange(index, "experience", e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select an option</option>
                <option value="Fresher">Fresher</option>
                <option value="0-1 Years">0–1 Years</option>
                <option value="1-3 Years">1–3 Years</option>
                <option value="3-5 Years">3–5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* LinkedIn */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
            <button className="p-2 hover:bg-muted rounded transition">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </div>

          <input
            type="text"
            placeholder="linkedin.com/in/username"
            value={user.linkedin || ""}
            onChange={(e) => handleLinkedInChange(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Resume Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Resume</h3>
            <button className="p-2 hover:bg-muted rounded transition">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between border border-border rounded-lg bg-muted/50 px-4 py-3">
            <div className="flex items-center gap-2 text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">{user.resume || "myresume.pdf"}</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="resumeUpload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeChange}
                className="hidden"
              />
              <label
                htmlFor="resumeUpload"
                className="cursor-pointer text-primary text-sm font-medium hover:underline"
              >
                Upload
              </label>
              <button className="text-primary text-sm font-medium hover:underline">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
