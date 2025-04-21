// TODO: Correct types when database is ready

export type Category = 'KPI' | 'Layout' | 'Storyboards';

export interface Question {
  id: string;
  text: string;
  description?: string;
}

export interface Asset {
  id: string; // UUID
  title: string;
  name: string;
  summary: string;
  category: Category;
  description: string;
  url: string;
  thumbnail_url: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  favorite?: boolean;
  created_at: string;
  updated_at: string;

  kpi_data?: {} | null;

  layout_data?: {
    pages: number;
    type: string;
    used: number;
    questions: Question[];
  } | null;

  storyboard_data?: {} | null;
}
