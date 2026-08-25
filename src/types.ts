export type RecordRow={id:string;alcohol:number;volatileAcidity:number;sulphates:number;quality:number;source:"UCI reference slice"|"local import"};
export type Metrics={total:number;positive:number;predictedPositive:number;tp:number;fp:number;tn:number;fn:number;precision:number;recall:number;fpr:number;accuracy:number;coverage:number};
export type Cohort={name:string;records:RecordRow[];metrics:Metrics;meanScore:number};
