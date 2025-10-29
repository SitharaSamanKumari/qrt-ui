import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  onSwitchToSignUp,
  onLoginSuccess, // ✅ new callback
  ...props
}: React.ComponentProps<"div"> & {
  onSwitchToSignUp?: () => void
  onLoginSuccess?: () => void
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault() // prevent page reload
              // Simulate login
              setTimeout(() => {
                // pretend login success
                localStorage.setItem("auth", "true")
                onLoginSuccess?.() // call callback
              }, 500)
            }}
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    className="text-indigo-600 hover:underline"
                    onClick={(e) => {
                      e.preventDefault()
                      onSwitchToSignUp?.()
                    }}
                  >
                    Sign up
                  </button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
