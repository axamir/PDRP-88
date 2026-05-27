import { generateFeatures } from "./feature-generator";
import { createExperiment } from "./experiment-factory";

type Intent = "fa_user" | "en_user" | "global_user";

export function productBrainV2(intent: Intent, score: number) {

  const features = generateFeatures(intent, score);

  const experiments = features.map(createExperiment);

  const primaryFeature = features
    .sort((a, b) =>
      a.priority === "high" ? -1 : 1
    )[0];

  return {
    intent,
    score,
    features,
    experiments,
    primaryFeature,
  };
}
