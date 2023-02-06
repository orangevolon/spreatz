const API_BASE_URL = "https://api.pons.com/v1/dictionary";

export function usePonsLookup() {
  const lookup = async (word: string) => {
    const query = `${API_BASE_URL}?l=dedx&q=${word}`;
    const result = await fetch(query, {
      headers: {
        "X-Secret": process.env["PONS_API_SECRET"],
      },
    });

    const text = await result.json();
  };

  return { lookup };
}
