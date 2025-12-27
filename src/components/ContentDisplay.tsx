// import { BookOpen } from 'lucide-react';
// import type { Chapter } from '../lib/types';

// interface ContentDisplayProps {
//   chapter: Chapter | null;
// }

// export default function ContentDisplay({ chapter }: ContentDisplayProps) {
//   if (!chapter) {
//     return (
//       <div className="flex-1 flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2">
//             Welcome to Computer Networks
//           </h2>
//           <p className="text-gray-500">
//             Select a chapter from the sidebar to start learning
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 overflow-y-auto bg-gray-50">
//       <div className="max-w-5xl mx-auto">
//         <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-12 mb-8">
//           <div className="mb-4">
//             <span className="text-blue-100 text-sm font-medium">
//               Chapter {chapter.chapter_number}
//             </span>
//           </div>
//           <h1 className="text-4xl font-bold mb-10">{chapter.title}</h1>
//           <p className="text-blue-100 text-lg">
//             Learn essential concepts in computer networking
//           </p>
//         </div>

//         <div className="px-12 pb-12">
//           <div
//             className="prose prose-lg max-w-none bg-white rounded-lg shadow-sm p-8"
//             dangerouslySetInnerHTML={{ __html: chapter.content }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



import { BookOpen } from 'lucide-react';
import type { Chapter } from '../lib/types';

interface ContentDisplayProps {
  chapter: Chapter | null;
}

export default function ContentDisplay({ chapter }: ContentDisplayProps) {
  if (!chapter) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Welcome to Computer Networks
          </h2>
          <p className="text-gray-500">
            Select a chapter from the sidebar to start learning
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="max-w-5xl mx-auto w-full">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 sm:p-6 md:p-10 mb-6">
          <span className="text-blue-100 text-xs sm:text-sm font-medium">
            Chapter {chapter.chapter_number}
          </span>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
 font-bold leading-tight mt-2 mb-3">
            {chapter.title}
          </h1>

          <p className="text-blue-100 text-sm sm:text-base md:text-lg">
            Learn essential concepts in computer networking
          </p>
        </div>

        {/* Content */}
        <div className="px-3 sm:px-4 md:px-6 lg:px-10 pb-8">

          <div
            className="prose prose-sm sm:prose-base md:prose-lg break-words
 max-w-none bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: chapter.content }}
          />
        </div>
      </div>
    </div>
  );
}
