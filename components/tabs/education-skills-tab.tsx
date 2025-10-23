"use client"

interface User {
  id: string
  name: string
  email: string
  school?: string
  degree?: string
  course?: string
  yearOfCompletion?: string
  grade?: string
  skills?: string
  projects?: string
  [key: string]: any
}

interface EducationSkillsTabProps {
  user: User
  onUpdate: (user: User) => void
}

export default function EducationSkillsTab({ user, onUpdate }: EducationSkillsTabProps) {
  const handleChange = (field: string, value: string) => {
    onUpdate({ ...user, [field]: value })
  }

  return (
    <div className="space-y-8">
      {/* Education Details */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Education Details</h3>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">School / College</label>
            <input
              type="text"
              placeholder="e.g. Lincoln College"
              value={user.school || ""}
              onChange={(e) => handleChange("school", e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Highest degree or equivalent</label>
            <input
              type="text"
              placeholder="e.g. Bachelors in Technology"
              value={user.degree || ""}
              onChange={(e) => handleChange("degree", e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Course</label>
            <input
              type="text"
              placeholder="e.g. Computer science engineering"
              value={user.course || ""}
              onChange={(e) => handleChange("course", e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Year of completion</label>
            <select
              value={user.yearOfCompletion || ""}
              onChange={(e) => handleChange("yearOfCompletion", e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">YYYY</option>
              {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Grade</label>
            <input
              type="text"
              placeholder="Enter here"
              value={user.grade || ""}
              onChange={(e) => handleChange("grade", e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Skills & Projects */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Skills & Projects</h3>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Skills</label>
            <textarea
              placeholder="Enter here"
              value={user.skills || ""}
              onChange={(e) => handleChange("skills", e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Projects</label>
            <textarea
              placeholder="Enter here"
              value={user.projects || ""}
              onChange={(e) => handleChange("projects", e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
