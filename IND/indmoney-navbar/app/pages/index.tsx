import NavBar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mt-12">Welcome to INDmoney</h1>
        <p className="text-lg mt-4">This is your financial dashboard.</p>
      </main>
    </div>
  );
}
