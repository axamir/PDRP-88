import { Feature } from "./feature-generator";

export type Experiment = {
  id: string;
  featureId: string;
  variantA: string;
  variantB: string;
};

export function createExperiment(feature: Feature): Experiment {
  return {
    id: `exp_${feature.id}`,
    featureId: feature.id,
    variantA: `${feature.title} - Control`,
    variantB: `${feature.title} - Enhanced AI Version`,
  };
}
