type MuseumItem = {
  name: string;
  description: string;
  image: string;
  audio?: string;
};

type MuseumItems = {
  en: {
    [id: number]: MuseumItem;
  };
  ro: {
    [id: number]: MuseumItem;
  };
};

export const museumItems: MuseumItems = {
  en: {
    1: {
      name: "The vase from Biia",
      description:
        "This vase was found in the ruins of the ancient city of Biia. It is estimated to be over 2000 years old.",
      image:
        "https://muzeulvirtual.ro/wp-content/uploads/2020/11/Vasul-de-la-Biia.jpg",
      audio: "en-1.mp3",
    },
    2: {
      name: "The vase from Biia",
      description:
        "This vase was found in the ruins of the ancient city of Biia. It is estimated to be over 2000 years old.",
      image:
        "https://muzeulvirtual.ro/wp-content/uploads/2020/11/Vasul-de-la-Biia.jpg",
      audio: "en-2.mp3",
    },
    3: {
      name: "The vase from Biia",
      description:
        "This vase was found in the ruins of the ancient city of Biia. It is estimated to be over 2000 years old.",
      image:
        "https://muzeulvirtual.ro/wp-content/uploads/2020/11/Vasul-de-la-Biia.jpg",
      audio: "en-3.mp3",
    },
  },
  ro: {
    1: {
      name: "Vasul de la Biia",
      description:
        "Acest vas a fost gasit in ruinele orasului antic Biia. Se estimeaza ca are peste 2000 de ani.",
      image:
        "https://muzeulvirtual.ro/wp-content/uploads/2020/11/Vasul-de-la-Biia.jpg",
      audio: "ro-1.mp3",
    },
    2: {
      name: "Vasul de la Biia",
      description:
        "Acest vas a fost gasit in ruinele orasului antic Biia. Se estimeaza ca are peste 2000 de ani.",
      image:
        "https://muzeulvirtual.ro/wp-content/uploads/2020/11/Vasul-de-la-Biia.jpg",
      audio: "ro-2.mp3",
    },
    3: {
      name: "Vasul de la Biia",
      description:
        "Acest vas a fost gasit in ruinele orasului antic Biia. Se estimeaza ca are peste 2000 de ani.",
      image:
        "https://muzeulvirtual.ro/wp-content/uploads/2020/11/Vasul-de-la-Biia.jpg",
      audio: "ro-3.mp3",
    },
  },
};
