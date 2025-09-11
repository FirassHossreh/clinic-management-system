import axios from "axios";
import { cookies } from "next/headers";
export async function serverApi() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  return axios.create({
    baseURL: "localhost:5000",
    headers: {
      Cookie: cookieHeader, // SSR’de cookie’yi biz ekliyoruz
    },
  });
}
