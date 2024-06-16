// const getRandomTailwindColor = (seed: number): string => {
//   // List of Tailwind colors ending in 100
//   const colors: string[] = [
//       'bg-red-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-indigo-100', 'bg-purple-100', 'bg-pink-100',
//       'bg-rose-100', 'bg-orange-100', 'bg-amber-100', 'bg-lime-100', 'bg-emerald-100', 'bg-teal-100', 'bg-cyan-100',
//       'bg-sky-100', 'bg-violet-100', 'bg-fuchsia-100'
//   ];

//   // Use the seed to determine initial index
//   let index = Math.abs(seed) % colors.length;

//   // Return the selected color
//   console.log(colors[index])
//   return colors[index];
// };







const getRandomTailwindColor = (seed: number): string => {
  const colors: string[] = [
    'bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-slate-100', 'bg-gray-100',
    'bg-purple-100', 'bg-neutral-100', 'bg-cyan-100', 'bg-pink-100', 'bg-yellow-100'
];
  const index = Math.abs(seed) % colors.length;

  console.log(colors[index], index)
  return colors[index];
};
export default getRandomTailwindColor;





