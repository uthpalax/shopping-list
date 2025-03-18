import type { Route } from "./+types/home";
import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList";
import ShoppingForm from "~/components/ShoppingForm";
import { prisma } from '~/server/db'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Shopping List" },
    { name: "description", content: "One list to rule them all" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const items = await prisma.item.findMany()
  return {
    items,
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <div className="max-w-96 pb-4 flex flex-col justify-between h-screen m-auto">
    <div>
      <Header />
      <ShoppingList items={loaderData.items} />
    </div>
    <ShoppingForm />
  </div>;
}
