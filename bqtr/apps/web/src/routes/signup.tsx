// src/routes/signup.tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { GalleryVerticalEnd } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/signup")({
  component: SignupPage,
})

function SignupPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  async function handleSignup() {
    setLoading(true)
    // Simulate an async signup call (replace with your API call)
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Store fake auth token for now
    localStorage.setItem("auth", "true")

    // After signup, go to your app (you can change this route later)
    navigate({ to: "/propel" })
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          QTR
        </a>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSignup()
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            required
            className="border rounded-md p-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border rounded-md p-2 text-sm"
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
          </Button>
        </form>

        <button
          onClick={() => navigate({ to: "/login" })}
          className="text-sm text-muted-foreground hover:underline self-center"
        >
          Already have an account? Log in
        </button>
      </div>
    </div>
  )
}
