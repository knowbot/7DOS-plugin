import { AbstractValue } from "./AbstractValue";

class BoolValue extends AbstractValue {
    private value: boolean;

    constructor(value: boolean, name: string) {
        if (value == null || name == null) {
            throw new TypeError("invalid parameter");
        }
        super(name);
        this.value = value;
    }

    public isValueType(value: string): boolean {
        if (value == null) {
            throw new TypeError("invalid parameter");
        }
        const boolValue = value.toLowerCase();
        if (boolValue !== "true" && boolValue !== "false") {
            return false;
        } else if (boolValue === "true" && this.value) {
            return true;
        } else if (boolValue === "false" && !this.value) {
            return true;
        } else {
            return false;
        }
    }
}

export { BoolValue };
