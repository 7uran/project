export interface Project {
    id: string;
    title: string;
    description: string;
    user: string;
    status: string;
    issues: number;
    resolved: number;
    comment: string;
    progress: number;
  }