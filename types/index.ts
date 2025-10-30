// Tipos de usuario
export type UserRole = 'farmer' | 'investor' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isPremium: boolean;
  createdAt: Date;
}

// Tipos de financiamiento
export type FinancingType = 'credit' | 'equity' | 'guarantee' | 'mixed';

// Información del agricultor
export interface FarmerProfile {
  userId: string;
  farmName: string;
  location: {
    department: string;
    municipality: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  cropType: string;
  farmSize: number; // hectáreas
  yearsOfExperience: number;
  phoneNumber: string;
  profileImage?: string;
}

// Información económica
export interface EconomicData {
  annualProduction: number; // toneladas
  averageYield: number; // toneladas/hectárea
  averagePrice: number; // precio por tonelada
  annualRevenue: number;
  productionCosts: number;
  netIncome: number;
  hasCommercialAgreements: boolean;
  buyers?: string[];
}

// Información ambiental (ESG - Environmental)
export interface EnvironmentalData {
  hasCertifications: boolean;
  certifications?: string[]; // Ej: "RSPO", "Rainforest Alliance"
  usesOrganicPractices: boolean;
  waterManagement: 'excellent' | 'good' | 'fair' | 'poor';
  soilConservation: 'excellent' | 'good' | 'fair' | 'poor';
  biodiversityProtection: 'excellent' | 'good' | 'fair' | 'poor';
  carbonFootprint?: number; // toneladas CO2/año
  renewableEnergyUsage: boolean;
}

// Información social (ESG - Social)
export interface SocialData {
  numberOfEmployees: number;
  providesStableEmployment: boolean;
  offersHealthBenefits: boolean;
  offersSocialSecurity: boolean;
  providesTraining: boolean;
  communityImpact: string;
  genderEquality: boolean;
  percentageFemaleEmployees?: number;
}

// Necesidades de financiamiento
export interface FinancingNeeds {
  amount: number; // monto solicitado
  financingType: FinancingType;
  purpose: string; // destino del financiamiento
  term: number; // plazo en meses
  expectedReturn?: number; // retorno esperado %
  collateral?: string; // garantías disponibles
  previousFinancing?: {
    hasReceived: boolean;
    source?: string;
    amount?: number;
  };
}

// Indicadores ESG calculados
export interface ESGScore {
  environmental: number; // 0-100
  social: number; // 0-100
  governance: number; // 0-100
  overall: number; // promedio
}

// Proyecto completo
export interface Project {
  id: string;
  farmerId: string;
  farmerProfile: FarmerProfile;
  economicData: EconomicData;
  environmentalData: EnvironmentalData;
  socialData: SocialData;
  financingNeeds: FinancingNeeds;
  esgScore: ESGScore;
  status: 'draft' | 'pending_validation' | 'active' | 'funded' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
}

// Vista previa del proyecto (para la card)
export interface ProjectPreview {
  id: string;
  farmName: string;
  location: string;
  cropType: string;
  farmSize: number;
  financingType: FinancingType;
  amount: number;
  esgScore: ESGScore;
  profileImage?: string;
  featured: boolean;
}

// Información de inversión
export interface Investment {
  id: string;
  investorId: string;
  projectId: string;
  amount: number;
  date: Date;
  status: 'pending' | 'active' | 'completed';
  expectedReturn: number;
  actualReturn?: number;
}

// Reporte financiero
export interface FinancialReport {
  projectId: string;
  period: string;
  revenue: number;
  expenses: number;
  netIncome: number;
  roi: number;
  metrics: {
    productionVolume: number;
    salesPrice: number;
    costPerUnit: number;
  };
}

// Reporte de impacto ESG
export interface ImpactReport {
  projectId: string;
  period: string;
  environmental: {
    carbonReduction: number;
    waterSaved: number;
    biodiversityIndex: number;
  };
  social: {
    jobsCreated: number;
    trainingHours: number;
    communityInvestment: number;
  };
  governance: {
    transparencyScore: number;
    complianceRate: number;
  };
}
