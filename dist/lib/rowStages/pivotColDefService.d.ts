// ag-grid-enterprise v5.0.0-alpha.6
import { ColDef, ColGroupDef } from "ag-grid/main";
export interface PivotColDefServiceResult {
    pivotColumnGroupDefs: (ColDef | ColGroupDef)[];
    pivotColumnDefs: ColDef[];
}
export declare class PivotColDefService {
    private columnController;
    createPivotColumnDefs(uniqueValues: any): PivotColDefServiceResult;
    private recursivelyAddGroup(parentChildren, pivotColumnDefs, index, uniqueValues, pivotKeys, columnIdSequence, levelsDeep);
    private createColDef(valueColumn, headerName, pivotKeys, columnIdSequence);
    private headerNameComparator(a, b);
}
