/*
  # Create Chapters Table for Student Learning Portal

  1. New Tables
    - `chapters`
      - `id` (uuid, primary key) - Unique identifier for each chapter
      - `chapter_number` (integer) - Chapter number for ordering
      - `title` (text) - Chapter title
      - `content` (text) - Full content in HTML/markdown format
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `chapters` table
    - Add policy for public read access (since this is educational content for all students)
    
  3. Indexes
    - Add index on chapter_number for efficient ordering
*/

CREATE TABLE IF NOT EXISTS chapters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_number integer UNIQUE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view chapters"
  ON chapters
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_chapters_number ON chapters(chapter_number);

