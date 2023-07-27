/**
 * getFolders()
 * saveFolder()
 * savePinInFolder()
 */

const generateId = () => {
  return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`
};

const saveFolders = async (folders) => {
  localStorage.setItem('folders', JSON.stringify(folders));
};

export const getFolders = async () => {
  return JSON.parse(localStorage.getItem('folders')) || []
}

export const saveFolder = async (folderName) => {
  /** PASSOS
   * * Pegar lista/array de pastas -> getFolders()
   * * Adicionar a pasta dentro desse array
   * * Salvar novamente no localStorage
   */

  const folders = await getFolders();

  const newFolder = {
    id: generateId(),
    name: folderName,
    pins: []
  };

  folders.push(newFolder);

  await saveFolders(folders);

  return newFolder;
}

export const savePinInFolder = async (folderId, pinId) => {
  /**
   * * Listar coleção/array de pastas do Storage
   * * Encontrar a pasta que queremos adicionar pin
   * * Adicionar o pinId na pasta
   * * Salvar pastas no Storage novamente
   */

  const folders = await getFolders();

  const folderIndex = folders.findIndex(function (folder) {
    return folder.id === folderId;
  });

  if (folderIndex !== -1) {
    folders[folderIndex].pins.push(pinId);
  }

  await saveFolders(folders);

  return { ...folders[folderIndex] };
}

export const getPins = async () => {
  return [
    {
      id: '1',
      title: 'Cropped Wangxian',
      image: 'https://miniprojetodescomplica01.netlify.app/IMG/Player%20-%20MDZS%20Cropped-min.png',
      total: 0,
      valor: 54.00
    },
    {
      id: '2',
      title: 'Camiseta Dorama Queen',
      image: 'https://miniprojetodescomplica01.netlify.app/IMG/photo_2022-07-21_18-29-55-min.jpg',
      total: 0,
      valor: 64.90
    },
    {
      id: '3',
      title: 'Moletom Canguru Dab',
      image: 'https://miniprojetodescomplica01.netlify.app/IMG/Player%20-%20AW%20-%20Moletom%20Canguru%20Dab-min.png',
      total: 0,
      valor: 134.00
    }
  ]
}