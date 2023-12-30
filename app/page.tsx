import MasterLayout from "@/components/Layout/MasterLayout";
import GithubLoginButton from "@/components/auth/GithubLoginButton";
import ThemeToggler from "@/components/theme/theme-toggler";
import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";
import authOptions from "@/components/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <MasterLayout>
        <Button className="mx-3">New Page </Button>
        <GithubLoginButton />
        <ThemeToggler />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit
          voluptates facilis optio dolorum provident sunt laudantium aliquid,
          maxime dolores ratione eaque corporis vero, et totam, harum ad
          praesentium. Rem.
        </p>
        <pre>{JSON.stringify(session)}</pre>
      </MasterLayout>
    </div>
  );
}
