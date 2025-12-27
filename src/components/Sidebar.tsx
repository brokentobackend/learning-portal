import { BookOpen, ChevronRight } from 'lucide-react';
import type { Chapter } from '../lib/types';

interface SidebarProps {
  chapters: Chapter[];
  selectedChapter: Chapter | null;
  onSelectChapter: (chapter: Chapter) => void;
}

export default function Sidebar({ chapters, selectedChapter, onSelectChapter }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-gray-800" />
          <h1 className="text-xl font-bold text-gray-900">Computer Networks</h1>
        </div>
      </div>

      <nav className="p-4">
        <div className="space-y-1">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => onSelectChapter(chapter)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
                selectedChapter?.id === chapter.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-sm font-medium">{chapter.title}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
