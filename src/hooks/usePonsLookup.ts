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
    const meaning = entry?.arabs?.[0].translations?.[0].source;

    return {
      word: entry?.headword,
      details: entry?.headword_full,
      meaning,
    };
  };

  return { lookup };
}
