

"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {
  try {
    // Corrected URL format
    const response = await fetch(
      `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
    );

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Return the mapped AnimeCard components
    return data.map((anime: AnimeProp, index: number) => (
      <AnimeCard key={anime.id} anime={anime} index={index} />
    ));
  } catch (error) {
    console.error("Failed to fetch anime data:", error);
    // Return an empty array to prevent breaking the app
    return [];
  }
}
