// import { useEffect, useState } from 'react';
// import Sidebar from './components/Sidebar';
// import ContentDisplay from './components/ContentDisplay';
// import { supabase } from './lib/supabase';
// import type { Chapter } from './lib/types';

// function App() {
//   const [chapters, setChapters] = useState<Chapter[]>([]);
//   const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
//   const [loading, setLoading] = useState(true);



//   useEffect(() => {
//     loadChapters();
//   }, []);

//   async function loadChapters() {
//     try {
//       const { data, error } = await supabase
//         .from('chapters')
//         .select('*')
//         .order('chapter_number', { ascending: true });

//       if (error) throw error;

//       if (data) {
//         setChapters(data);
//         if (data.length > 0) {
//           setSelectedChapter(data[0]);
//         }
//       }
//     } catch (error) {
//       console.error('Error loading chapters:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading chapters...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar
//         chapters={chapters}
//         selectedChapter={selectedChapter}
//         onSelectChapter={setSelectedChapter}
//       />
//       <ContentDisplay chapter={selectedChapter} />
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { supabase } from './lib/supabase';
import type { Chapter } from './lib/types';

function App() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // NEW

  useEffect(() => {
    loadChapters();
  }, []);

  async function loadChapters() {
    try {
      const { data, error } = await supabase
        .from('chapters')
        .select('*')
        .order('chapter_number', { ascending: true });

      if (error) throw error;

      if (data) {
        setChapters(data);
        if (data.length > 0) {
          setSelectedChapter(data[0]);
        }
      }
    } catch (error) {
      console.error('Error loading chapters:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading chapters...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-visible">

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-20 bg-white border-b px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-2xl"
          aria-label="Open menu"
        >
          ☰
        </button>
        <span className="font-semibold">Computer Networks</span>
      </header>

      {/* Overlay (mobile only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        chapters={chapters}
        selectedChapter={selectedChapter}
        onSelectChapter={(chapter) => {
          setSelectedChapter(chapter);
          setIsSidebarOpen(false); // close on mobile click
        }}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 pt-14 md:pt-0">
        <ContentDisplay chapter={selectedChapter} />
      </div>
    </div>
  );
}

export default App;
