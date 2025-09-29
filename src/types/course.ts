export type QuestionType =
  | "multiple-choice"
  | "true-false"
  | "fill-in-the-blank"
  | "short-answer"
  | "matching";

export interface BaseQuestion {
  id: string;
  prompt: string;
  explanation?: string;
}

export interface MultipleChoiceOption {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface PracticeQuestion extends BaseQuestion {
  type: QuestionType;
  options?: MultipleChoiceOption[];
  correctAnswer?: boolean;
  answer?: string;
  answers?: string[];
  pairs?: Array<{ left: string; right: string }>;
  timeLimitSeconds?: number;
  rewardPoints?: number;
}

export interface LessonActivity {
  id: string;
  title: string;
  description: string;
  type: "quiz" | "game" | "challenge";
  questions: PracticeQuestion[];
  successCriteria?: {
    minimumScore?: number;
    consecutiveCorrect?: number;
  };
  metadata?: {
    gameType?:
      | "hangman"
      | "flashcards"
      | "speed-run"
      | "match-up"
      | "word-search"
      | "rapid-response";
    instructions?: string;
    hint?: string;
    durationMinutes?: number;
  };
}

export interface LessonQuiz {
  id: string;
  title: string;
  description: string;
  questions: PracticeQuestion[];
  passingScore: number;
}

export interface LessonContentSegment {
  heading?: string;
  body: string;
}

export interface LessonResource {
  id: string;
  title: string;
  url: string;
  type: "video" | "article" | "worksheet" | "interactive";
  durationMinutes?: number;
}

export interface UnitTopic {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: string[];
}

export interface Lesson {
  id: string;
  title: string;
  summary: string;
  objectives: string[];
  content: LessonContentSegment[];
  examples: string[];
  resources?: LessonResource[];
  activities: LessonActivity[];
  quiz: LessonQuiz;
  recommendedGame?: {
    title: string;
    description: string;
    type: "hangman" | "word-search" | "flashcards" | "speed-run" | "rapid-response" | "match-up";
    vocabulary: string[];
  };
}

export interface UnitFinalExam extends LessonQuiz {
  unlockCondition: {
    minimumLessonCompletion: number;
    minimumOverallScore: number;
  };
}

export interface Unit {
  id: string;
  title: string;
  overview: string;
  themeColor?: string;
  badgeName?: string;
  lessons?: Lesson[];
  finalExam?: UnitFinalExam;
  topics?: UnitTopic[];
  practice?: PracticeQuestion[];
  masteryTest?: PracticeQuestion[];
}

export interface CourseData {
  grade: string;
  subject: string;
  units: Unit[];
}

export interface ActivityProgress {
  activityId: string;
  completed: boolean;
  score: number;
  total: number;
  attempts: number;
  bestScore: number;
  lastAttemptedAt?: string;
}

export interface LessonProgress {
  lessonId: string;
  unlocked: boolean;
  completion: number;
  activityProgress?: ActivityProgress[];
  quizScore?: number | null;
  quizAttempts?: number;
  quizBestScore?: number;
  lastAccessedAt?: string;
}

export interface UnitProgress {
  unitId: string;
  unlocked: boolean;
  completion: number;
  practiceScore?: number | null;
  testScore?: number | null;
  lessons?: LessonProgress[];
  finalExamScore?: number | null;
  finalExamAttempts?: number;
  finalExamBestScore?: number;
  badgeEarnedAt?: string;
  lastAccessedAt?: string;
}

export interface ProgressState {
  overallCompletion: number;
  units: UnitProgress[];
  totalBadgesEarned?: number;
  totalStarsEarned?: number;
}
