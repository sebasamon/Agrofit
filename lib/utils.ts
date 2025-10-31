import { FinancingType } from '@/types';

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-CO').format(num);
}

export function getFinancingTypeLabel(type: FinancingType): string {
  const labels: Record<FinancingType, string> = {
    credit: 'Crédito',
    equity: 'Participación Accionaria',
    guarantee: 'Garantía',
    mixed: 'Mixto'
  };
  return labels[type];
}

export function getESGColor(score: number): string {
  if (score >= 85) return 'text-green-600';
  if (score >= 70) return 'text-yellow-600';
  if (score >= 50) return 'text-orange-600';
  return 'text-red-600';
}

export function getESGBgColor(score: number): string {
  if (score >= 85) return 'bg-green-100';
  if (score >= 70) return 'bg-yellow-100';
  if (score >= 50) return 'bg-orange-100';
  return 'bg-red-100';
}

export function getESGLabel(score: number): string {
  if (score >= 85) return 'Excelente';
  if (score >= 70) return 'Bueno';
  if (score >= 50) return 'Regular';
  return 'Bajo';
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
