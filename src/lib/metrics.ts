import type { Cohort,Metrics,RecordRow } from "../types";
export const score=(r:RecordRow)=>Math.min(.95,Math.max(.05,.5+(r.alcohol-10)*.12+r.sulphates*.22-r.volatileAcidity*.18));
export const actual=(r:RecordRow)=>r.quality>=6;
export function metrics(rows:RecordRow[],threshold:number):Metrics{let tp=0,fp=0,tn=0,fn=0;for(const r of rows){const p=score(r)>=threshold,a=actual(r);if(p&&a)tp++;else if(p)fp++;else if(a)fn++;else tn++}const total=rows.length,positive=tp+fn,predictedPositive=tp+fp;return{total,positive,predictedPositive,tp,fp,tn,fn,precision:predictedPositive?tp/predictedPositive:0,recall:positive?tp/positive:0,fpr:fp+tn?fp/(fp+tn):0,accuracy:total?(tp+tn)/total:0,coverage:total?rows.filter(r=>Number.isFinite(r.alcohol)&&Number.isFinite(r.volatileAcidity)&&Number.isFinite(r.sulphates)&&Number.isFinite(r.quality)).length/total:0}}
export const cohortName=(r:RecordRow)=>r.alcohol<9.8?"Lower alcohol":r.alcohol<10.5?"Middle alcohol":"Higher alcohol";
export const cohorts=(rows:RecordRow[],threshold:number):Cohort[]=>["Lower alcohol","Middle alcohol","Higher alcohol"].map(name=>{const records=rows.filter(r=>cohortName(r)===name);return{name,records,metrics:metrics(records,threshold),meanScore:records.length?records.reduce((a,r)=>a+score(r),0)/records.length:0}});
export const pct=(n:number)=>`${Math.round(n*100)}%`;
