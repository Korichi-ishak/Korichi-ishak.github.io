import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Menu */}
      <nav className="row-start-1 w-full flex justify-center gap-8 bg-gray-100 p-4 fixed top-0 z-10">
        <a href="#about" className="hover:underline">À propos de moi</a>
        <a href="#projects" className="hover:underline">Mes projets</a>
        <a href="#education" className="hover:underline">Mes formations</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-16">
        <Image
          className="dark:invert"
          src="./next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/pages/index.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="./vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        {/* À propos de moi Section */}
        <section id="about" className="w-full mt-16">
          <h2 className="text-2xl font-bold mb-4">À propos de moi</h2>
          <p className="text-base">
            Bonjour, je suis un développeur passionné par la création de sites web modernes et performants.
          </p>
        </section>

        {/* Mes projets Section */}
        <section id="projects" className="w-full mt-16">
          <h2 className="text-2xl font-bold mb-4">Mes projets</h2>
          <ul className="list-disc pl-5">
            <li>Projet 1: Description du projet 1.</li>
            <li>Projet 2: Description du projet 2.</li>
            <li>Projet 3: Description du projet 3.</li>
          </ul>
        </section>

        {/* Mes formations Section */}
        <section id="education" className="w-full mt-16">
          <h2 className="text-2xl font-bold mb-4">Mes formations</h2>
          <ul className="list-disc pl-5">
            <li>Formation 1: Description de la formation 1.</li>
            <li>Formation 2: Description de la formation 2.</li>
            <li>Formation 3: Description de la formation 3.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full mt-16">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-base">
            Vous pouvez me contacter à l'adresse suivante : <a href="mailto:example@example.com" className="text-blue-500 hover:underline">example@example.com</a>
          </p>
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="./file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="./window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="./globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
