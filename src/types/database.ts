export type Locale =
  | "en"
  | "es"
  | "fr"
  | "pt"
  | "de"
  | "ar"
  | "hi"
  | "vi"
  | "zh";

export interface ArticleTranslation {
  title: string;
  title_display?: string;
  excerpt: string;
  content: string;
  image?: string;
  video?: string;
}

/** Stored in DB: translations keyed by locale */
export type ArticleTranslations = Partial<Record<Locale, ArticleTranslation>>;

export interface ArticleRow {
  id: string;
  slug: string;
  author: string;
  date: string;
  read_time: string;
  image: string | null;
  video: string | null;
  translations: ArticleTranslations | null;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: ArticleRow;
        Insert: Omit<ArticleRow, "created_at" | "updated_at"> & {
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Omit<ArticleRow, "id">>;
      };
    };
  };
}
