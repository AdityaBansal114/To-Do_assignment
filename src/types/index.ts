export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  isOutdoor: boolean;
  createdAt: string;
}

export interface Weather {
  temperature: number;
  description: string;
  icon: any;
}

export interface User {
  id: string;
  email: string;
  name: string;
}