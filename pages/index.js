import Meta from "@components/Meta";
import Navigatiopn from '@components/Navigation';

export default function Home() {
  return (
    <div>
      <Meta />
      <Navigatiopn />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
