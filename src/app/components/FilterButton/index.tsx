export default function FilterButton({ text, onClick, active = false }: { text: string, onClick: () => void, active?: boolean}) {
  return (
    <button 
      className={`
        py-2 px-4 rounded-xl text-black
        ${active ? 'bg-black text-white' : 'bg-gray-200'}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}