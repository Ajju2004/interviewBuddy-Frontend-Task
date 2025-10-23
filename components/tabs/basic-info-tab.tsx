"use client"

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
  [key: string]: any
}

interface BasicInfoTabProps {
  user: User
  onUpdate: (user: User) => void
}

export default function BasicInfoTab({ user, onUpdate }: BasicInfoTabProps) {
  const handleChange = (field: string, value: string) => {
    onUpdate({ ...user, [field]: value })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Basic Details</h3>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">First name</label>
          <input
            type="text"
            placeholder="e.g. John"
            value={user.firstName || ""}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Last name</label>
          <input
            type="text"
            placeholder="e.g. Doe"
            value={user.lastName || ""}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email ID</label>
          <input
            type="email"
            placeholder="e.g. mrnobody@mail.com"
            value={user.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Year of birth</label>
          <select
            value={user.yearOfBirth || ""}
            onChange={(e) => handleChange("yearOfBirth", e.target.value)}
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
          <label className="block text-sm font-medium text-foreground mb-2">Gender</label>
          <select
            value={user.gender || ""}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Phone number</label>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option>🇮🇳</option>
            </select>
            <input
              type="tel"
              placeholder="8332883854"
              value={user.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Alternate Phone no</label>
          <input
            type="tel"
            placeholder="e.g. 9876543210"
            value={user.alternatePhone || ""}
            onChange={(e) => handleChange("alternatePhone", e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">Address</label>
          <input
            type="text"
            placeholder="Enter here"
            value={user.address || ""}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Pincode</label>
          <input
            type="text"
            placeholder="Enter here"
            value={user.pincode || ""}
            onChange={(e) => handleChange("pincode", e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Domicile state</label>
          <select
            value={user.domicileState || ""}
            onChange={(e) => handleChange("domicileState", e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select an option</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="delhi">Delhi</option>
            <option value="karnataka">Karnataka</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Domicile country</label>
          <select
            value={user.domicileCountry || ""}
            onChange={(e) => handleChange("domicileCountry", e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select an option</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>
      </div>
    </div>
  )
}
