CREATE TYPE project_category AS ENUM (
  'Listicle',
  'How-to',
  'News',
  'Interview',
  'Story'
);

ALTER TABLE projects
  ADD COLUMN
    style project_category;
