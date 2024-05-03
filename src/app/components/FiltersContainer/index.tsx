import FilterButton from "../FilterButton";

interface FilterButtonProps {
  onClick: (e: string) => void;
  activeFilter: string;
};

export default function FiltersContainer({ activeFilter, onClick }: FilterButtonProps) {
  return (
    <div className="fixed w-full bg-white flex gap-2 items-end py-3">
      <FilterButton
        text="All"
        active={activeFilter === 'All'}
        onClick={() => onClick('All')}
      />
      <FilterButton
        text="Music"
        active={activeFilter === 'Music'}
        onClick={() => onClick('Music')}
      />
      <FilterButton
        text="News"
        active={activeFilter === 'News'}
        onClick={() => onClick('News')}
      />
      <FilterButton
        text="Chill-out music"
        active={activeFilter === 'Chill-out music'}
        onClick={() => onClick('Chill-out music')}
      />
      <FilterButton
        text="Gaming"
        active={activeFilter === 'Gaming'}
        onClick={() => onClick('Gaming')}
      />
      <FilterButton
        text="Live"
        active={activeFilter === 'Live'}
        onClick={() => onClick('Live')}
      />
      <FilterButton
        text="Meditation music"
        active={activeFilter === 'Meditation music'}
        onClick={() => onClick('Meditation music')}
      />
      <FilterButton
        text="Inventions"
        active={activeFilter === 'Inventions'}
        onClick={() => onClick('Inventions')}
      />
      <FilterButton
        text="Game shows"
        active={activeFilter === 'Game shows'}
        onClick={() => onClick('Game shows')}
      />
      <FilterButton
        text="Comedy"
        active={activeFilter === 'Comedy'}
        onClick={() => onClick('Comedy')}
      />
      <FilterButton
        text="Trucks"
        active={activeFilter === 'Trucks'}
        onClick={() => onClick('Trucks')}
      />
      <FilterButton
        text="Deep House"
        active={activeFilter === 'Deep House'}
        onClick={() => onClick('Deep House')}
      />
      <FilterButton
        text="Shows"
        active={activeFilter === 'Shows'}
        onClick={() => onClick('Shows')}
      />
      <FilterButton
        text="Podcast"
        active={activeFilter === 'Podcast'}
        onClick={() => onClick('Podcast')}
      />
      <FilterButton
        text="Animals"
        active={activeFilter === 'Animals'}
        onClick={() => onClick('Animals')}
      />
    </div>
  );
}