import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props} dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle className="">تسجيل الدخول</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" required />
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
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                  تسجيل الدخول
                </Button>
                <Button variant="outline" className="w-full cursor-pointer">
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
