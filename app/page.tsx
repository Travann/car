import { Footer, Hero, NavBar } from "@/components";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <NavBar />
        <div className="gradient" />
        <Hero />
        <div className={"mt-12 padding-x padding-y max-width"} id={"discover"}>
          <div className={"home__text-container"}>
            <h1 className={"text-4xl font-extrabold"}>Car Catalogue</h1>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
