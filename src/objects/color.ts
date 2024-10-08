/**
 * Color CRO
 * 3 Operations:
 *  - Color Red
 *  - Color Green
 *  - Color Blue
 */
import {
    ActionType,
    type CRO,
    type Operation,
    type ResolveConflictsType,
    SemanticsType,
    type Vertex,
} from "@topology-foundation/object";

export class ColorCRO implements CRO {

    operations: string[] = ["paint"];
    semanticsType: SemanticsType = SemanticsType.pair;
    colors: string[];

    constructor() {
        this.colors = [];
    }

    paint(color: string): void {
        this._paint(color);
    }

    private _paint(color: string): void {
        this.operations.push(color);
    }

    resolveConflicts(vertices: Vertex[]): ResolveConflictsType {
        return { action: ActionType.Nop };
    }

    mergeCallback(operations: Operation[]): void {
        
        this.colors = [];

        for (const op of operations) {
            console.log(op.type);
			if (!op.value) continue;
			switch (op.type) {
				case "paint": {
                    console.log("OP VALUE");
                    console.log(op.value)
					const color = op.value;
					this._paint(color);
					break;
				}
			}
		}
    }
}