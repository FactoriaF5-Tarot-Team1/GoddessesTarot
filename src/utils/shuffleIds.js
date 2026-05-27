function shuffleIds() {
  const ids = Array.from({ length: 22 }, (_, i) => i + 1);

  for (let i = ids.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[randomIndex]] = [ids[randomIndex], ids[i]];
  }

  return ids;
}

export default shuffleIds;
