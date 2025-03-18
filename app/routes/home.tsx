import type { Route } from "./+types/home";
import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList";
import ShoppingForm from "~/components/ShoppingForm";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Shopping List" },
    { name: "description", content: "One list to rule them all" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  // database calls 
  // this runs on the server
  return {
    data: 'hello sri lanka'
  }
}

export async function action({ request }: Route.ActionArgs) {
  let formData = request.formData.get('email')
  // database calls
  return {

  }
}

export default function Home({ loaderData }) {
  return <div className="max-w-96 pb-4 flex flex-col justify-between h-screen m-auto">
    <div>
      {loaderData.data}
      <form>
        <button></button>
      </form>
      <Header />
      <ShoppingList />
    </div>
    <ShoppingForm />
  </div>;
}
