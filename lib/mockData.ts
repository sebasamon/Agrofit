import { Project, ProjectPreview } from '@/types';

export const mockProjects: Project[] = [
  {
    id: '1',
    farmerId: 'farmer-1',
    farmerProfile: {
      userId: 'farmer-1',
      farmName: 'Finca La Esperanza',
      location: {
        department: 'Meta',
        municipality: 'San Martín',
        coordinates: { lat: 3.6952, lng: -73.6984 }
      },
      cropType: 'Palma Africana',
      farmSize: 45,
      yearsOfExperience: 15,
      phoneNumber: '+57 300 123 4567',
      profileImage: '/images/farm1.jpg'
    },
    economicData: {
      annualProduction: 900,
      averageYield: 20,
      averagePrice: 1200000,
      annualRevenue: 1080000000,
      productionCosts: 650000000,
      netIncome: 430000000,
      hasCommercialAgreements: true,
      buyers: ['Aceites S.A.', 'Extractora del Meta']
    },
    environmentalData: {
      hasCertifications: true,
      certifications: ['RSPO', 'Rainforest Alliance'],
      usesOrganicPractices: true,
      waterManagement: 'excellent',
      soilConservation: 'good',
      biodiversityProtection: 'excellent',
      carbonFootprint: 120,
      renewableEnergyUsage: true
    },
    socialData: {
      numberOfEmployees: 25,
      providesStableEmployment: true,
      offersHealthBenefits: true,
      offersSocialSecurity: true,
      providesTraining: true,
      communityImpact: 'Generación de empleo local y apoyo a escuelas rurales',
      genderEquality: true,
      percentageFemaleEmployees: 40
    },
    financingNeeds: {
      amount: 250000000,
      financingType: 'credit',
      purpose: 'Expansión de cultivo y mejora de infraestructura',
      term: 60,
      expectedReturn: 18,
      collateral: 'Título de propiedad y cosecha futura',
      previousFinancing: {
        hasReceived: true,
        source: 'Banco Agrario',
        amount: 150000000
      }
    },
    esgScore: {
      environmental: 92,
      social: 88,
      governance: 85,
      overall: 88
    },
    status: 'active',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-10-20'),
    isPublic: true
  },
  {
    id: '2',
    farmerId: 'farmer-2',
    farmerProfile: {
      userId: 'farmer-2',
      farmName: 'Agrícola San José',
      location: {
        department: 'Cesar',
        municipality: 'Aguachica',
        coordinates: { lat: 8.3088, lng: -73.6174 }
      },
      cropType: 'Palma Africana',
      farmSize: 32,
      yearsOfExperience: 10,
      phoneNumber: '+57 310 234 5678',
      profileImage: '/images/farm2.jpg'
    },
    economicData: {
      annualProduction: 640,
      averageYield: 20,
      averagePrice: 1180000,
      annualRevenue: 755200000,
      productionCosts: 480000000,
      netIncome: 275200000,
      hasCommercialAgreements: true,
      buyers: ['Extractora Cesar']
    },
    environmentalData: {
      hasCertifications: true,
      certifications: ['RSPO'],
      usesOrganicPractices: false,
      waterManagement: 'good',
      soilConservation: 'excellent',
      biodiversityProtection: 'good',
      carbonFootprint: 95,
      renewableEnergyUsage: false
    },
    socialData: {
      numberOfEmployees: 18,
      providesStableEmployment: true,
      offersHealthBenefits: true,
      offersSocialSecurity: true,
      providesTraining: false,
      communityImpact: 'Generación de empleo en zona rural',
      genderEquality: true,
      percentageFemaleEmployees: 35
    },
    financingNeeds: {
      amount: 180000000,
      financingType: 'mixed',
      purpose: 'Renovación de palmares y tecnificación del riego',
      term: 48,
      expectedReturn: 16,
      collateral: 'Título de propiedad',
      previousFinancing: {
        hasReceived: false
      }
    },
    esgScore: {
      environmental: 78,
      social: 82,
      governance: 80,
      overall: 80
    },
    status: 'active',
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-10-18'),
    isPublic: true
  },
  {
    id: '3',
    farmerId: 'farmer-3',
    farmerProfile: {
      userId: 'farmer-3',
      farmName: 'El Palmar Sostenible',
      location: {
        department: 'Santander',
        municipality: 'Sabana de Torres',
        coordinates: { lat: 7.3894, lng: -73.4953 }
      },
      cropType: 'Palma Africana',
      farmSize: 28,
      yearsOfExperience: 8,
      phoneNumber: '+57 320 345 6789',
      profileImage: '/images/farm3.jpg'
    },
    economicData: {
      annualProduction: 560,
      averageYield: 20,
      averagePrice: 1150000,
      annualRevenue: 644000000,
      productionCosts: 420000000,
      netIncome: 224000000,
      hasCommercialAgreements: true,
      buyers: ['Acepalma', 'Extractora Regional']
    },
    environmentalData: {
      hasCertifications: true,
      certifications: ['RSPO', 'ISO 14001'],
      usesOrganicPractices: true,
      waterManagement: 'excellent',
      soilConservation: 'excellent',
      biodiversityProtection: 'excellent',
      carbonFootprint: 75,
      renewableEnergyUsage: true
    },
    socialData: {
      numberOfEmployees: 15,
      providesStableEmployment: true,
      offersHealthBenefits: true,
      offersSocialSecurity: true,
      providesTraining: true,
      communityImpact: 'Programa de reforestación comunitaria y educación ambiental',
      genderEquality: true,
      percentageFemaleEmployees: 45
    },
    financingNeeds: {
      amount: 150000000,
      financingType: 'equity',
      purpose: 'Implementación de sistema de energía solar y biodigestores',
      term: 36,
      expectedReturn: 20,
      collateral: 'Participación accionaria del 25%',
      previousFinancing: {
        hasReceived: false
      }
    },
    esgScore: {
      environmental: 95,
      social: 90,
      governance: 88,
      overall: 91
    },
    status: 'active',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-10-25'),
    isPublic: true
  }
];

export const getProjectPreviews = (): ProjectPreview[] => {
  return mockProjects.map((project) => ({
    id: project.id,
    farmName: project.farmerProfile.farmName,
    location: `${project.farmerProfile.location.municipality}, ${project.farmerProfile.location.department}`,
    cropType: project.farmerProfile.cropType,
    farmSize: project.farmerProfile.farmSize,
    financingType: project.financingNeeds.financingType,
    amount: project.financingNeeds.amount,
    esgScore: project.esgScore,
    profileImage: project.farmerProfile.profileImage,
    featured: project.esgScore.overall >= 85
  }));
};

export const getProjectById = (id: string): Project | undefined => {
  return mockProjects.find(project => project.id === id);
};
