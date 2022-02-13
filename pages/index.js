import Meta from "@components/Meta";
import Navigation from "@components/Navigation";
import Dashboard from "@components/Dashboard";

export default function Home() {
  return (
    <div>
      <Meta />
      <Navigation />
      <Dashboard />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
