import { museumItems } from "../../../../public/items";
import Image from "next/image";
interface pageProps {
  params: {
    itemId: 1;
    language: "en" | "ro";
  };
}

export default function Page({ params }: pageProps) {
  let item;
  const language = params.language;
  const itemId = params.itemId;

  item = museumItems[language][itemId];

  const pathAudio = `/audio/${language}-${itemId}.mp3`;

  if (item === undefined) {
    return (
      <main className="flex min-h-screen flex-col items-center  p-24 bg-white">
        <div className="flex flex-col min-w-20 bg-gray-200 p-5 m-5">
          <h2 className="text-2xl font-bold text-gray-400 text-center m-5">
            The item you are looking for does not exist
          </h2>
        </div>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-white">
      <div className="flex flex-col items-center  min-w-20 bg-gray-200 p-5 m-5">
        <h1 className="text-2xl font-bold text-gray-400 text-center m-5">
          {item.name}
        </h1>
        <p className="text-xl font-bold text-gray-400 text-center m-5">
          {item.description}
        </p>
        <Image src={item.image} alt={item.name} width={100} height={100} className="w-1/2 h-1/2 m-5" />
        <audio controls src={pathAudio}></audio>
        <a href={pathAudio}></a>
      </div>
    </main>
  );
}
