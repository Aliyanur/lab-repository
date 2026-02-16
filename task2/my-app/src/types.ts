// Interface for User
export interface User {
  name: string;
  email: string;
  age: number;
}

// Union type for skill level
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

// Interface for Skill
export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}