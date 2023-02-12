import { WordLookupEntry } from "../types/wordLookup";

const API_BASE_URL = "https://api.pons.com/v1/dictionary";

export function usePonsLookup() {
  const lookup = async (word: string): Promise<WordLookupEntry> => {
    const query = `${API_BASE_URL}?l=dedx&q=${word}`;
    const result = await fetch(query, {
      headers: {
        "X-Secret": process.env["PONS_API_SECRET"],
      },
    });

    const response = await result.json();
    const entry = response?.[0]?.hits?.[0].roms?.[0];

    return {
      word: entry?.headword,
      meaning: entry?.headword_full,
    };
  };

  return { lookup };
}
