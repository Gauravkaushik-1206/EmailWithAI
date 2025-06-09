import LinkAccountButton from "@/components/link-account-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {

  return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Hello World
        <Button>Add</Button>
        <LinkAccountButton />
      </div>
  );
}
