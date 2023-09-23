export const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      return data.results.slice(0, 20);
    } catch (error) {
      console.error('Error fetching characters:', error);
      return [];
    }
  };