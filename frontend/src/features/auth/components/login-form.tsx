"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginFormData } from "../validations/login-validation";
/* style */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { loginService } from "../services/login";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
  });
  function handleLoginClick() {
    if (errors.email) {
      toast.warning(errors.email.message);
    } else if (errors.password) {
      toast.warning(errors.password.message);
    }
  }
  async function onSubmit(data: loginFormData) {
    try {
      const result = await loginService(data);
      reset();
      if (result && (result as any).status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleGoogleLogin() {
    window.location.href = "http://localhost:5000/api/v1/auth/google";
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props} dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle className="">تسجيل الدخول</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="text" {...register("email")} />
              </div>
              <div className="grid gap-3">
                <div className="flex justify-between ">
                  <Label htmlFor="password">كلمة السر</Label>
                  <a
                    href="#"
                    className="inline-block text-sm underline-offset-4 hover:underline"
                  >
                    نسيت كلمة السر ؟
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={isSubmitting}
                  onClick={handleLoginClick}
                >
                  {isSubmitting ? "....جاري تسجيل الدخول" : "تسجيل الدخول"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full cursor-pointer"
                  onClick={handleGoogleLogin}
                  disabled={isSubmitting}
                >
                  تسجيل الدخول مع <FontAwesomeIcon icon={faGoogle} />
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
