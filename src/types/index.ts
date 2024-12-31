export interface ResumeAnalysis {
  atsScore: number;
  keywordMatches: string[];
  missingKeywords: string[];
  suggestions: string[];
}

export interface ResumeData {
  content: string;
  jobDescription: string;
}