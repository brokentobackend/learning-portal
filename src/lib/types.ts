export interface Chapter {
  id: string;
  chapter_number: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      chapters: {
        Row: Chapter;
        Insert: Omit<Chapter, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Chapter, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
}
