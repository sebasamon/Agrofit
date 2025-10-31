'use client';

import { Project } from '@/types';
import { mockProjects } from './mockData';

const PROJECTS_KEY = 'agrofit_projects';
const INITIALIZED_KEY = 'agrofit_initialized';

// Initialize with mock data if first time
const initializeProjects = (): Project[] => {
  if (typeof window === 'undefined') return mockProjects;

  const initialized = localStorage.getItem(INITIALIZED_KEY);
  const stored = localStorage.getItem(PROJECTS_KEY);

  if (!initialized) {
    // First time - use mock data
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(mockProjects));
    localStorage.setItem(INITIALIZED_KEY, 'true');
    return mockProjects;
  }

  if (stored) {
    return JSON.parse(stored);
  }

  return mockProjects;
};

export const getAllProjects = (): Project[] => {
  return initializeProjects();
};

export const getProjectById = (id: string): Project | undefined => {
  const projects = getAllProjects();
  return projects.find(p => p.id === id);
};

export const getActiveProjects = (): Project[] => {
  return getAllProjects().filter(p => p.status === 'active');
};

export const getPendingProjects = (): Project[] => {
  return getAllProjects().filter(p => p.status === 'pending_validation');
};

export const addProject = (project: Project): void => {
  const projects = getAllProjects();
  projects.push(project);
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
};

export const updateProject = (id: string, updates: Partial<Project>): void => {
  const projects = getAllProjects();
  const index = projects.findIndex(p => p.id === id);

  if (index !== -1) {
    projects[index] = { ...projects[index], ...updates, updatedAt: new Date() };
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  }
};

export const approveProject = (id: string): void => {
  updateProject(id, { status: 'active' });
};

export const rejectProject = (id: string): void => {
  updateProject(id, { status: 'rejected' });
};

export const deleteProject = (id: string): void => {
  const projects = getAllProjects();
  const filtered = projects.filter(p => p.id !== id);
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(filtered));
};
