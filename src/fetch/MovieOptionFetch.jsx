export default async function MovieOptionFetch({ queryKey }) {
  const movie = queryKey[1];
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${movie}`);

  if (!res.ok) {
    throw new Error(`Movie card fetch failure`);
  }

  return res.json();
}
