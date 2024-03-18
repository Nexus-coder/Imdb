export default async function MovieFetchId({ queryKey }) {
  const id = queryKey[1];
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);

  if (!res.ok) {
    throw new Error(`Could not fetch the id${id}`);
  }
  return res.json();
}
