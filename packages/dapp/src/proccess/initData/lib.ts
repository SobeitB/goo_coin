import { formatEther } from "viem";


export const formulaPercent = (current:bigint, total:number) => ((total - +formatEther(current)) * 100) / total