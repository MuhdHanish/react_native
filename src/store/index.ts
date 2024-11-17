import { create } from "zustand";

type CounterStore = {
    count: number;
    func: (type: "INC" | "DEC") => void;
};

export const useCounterStore = create<CounterStore>()((set) => ({
    count: 0,
    func: (type) => set((state) => {
        if (type === "INC") {
            return { count: state.count + 1 };
        } else if (type === "DEC" && state.count > 0) {
            return { count: state.count - 1 };
        }
        return state; 
    })
}));
