export default async function CastFetch({ queryKey }) {
  const id = queryKey[1];
  const res = await fetch(`
    https://api.tvmaze.com/shows/${id}?embed=cast`);

  if (!res.ok) {
    throw new Error(`Movie card fetch failure`);
  }

  return res.json();
}
