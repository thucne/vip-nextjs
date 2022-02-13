
import Dashboard from "../components/dashboard/dashboard";

import Meta from "@components/Meta";
import Navigation from '@components/Navigation';


export default function Home() {

  return (
    <div>
      <Meta />
      <Navigation />
        <Dashboard/>
    </div>
  );
}

