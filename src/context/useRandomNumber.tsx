import React, { createContext, useContext, useState } from 'react'

type NumberContextType = {
    numbers: number[];
    addRandomNumber: (number: number) => void;
};

const NumberContext = createContext<NumberContextType | undefined>(undefined);

export const useRandomNumber = (): NumberContextType => {
    const context = useContext(NumberContext);
    if (!context) {
        throw new Error('useRandomNumber must be used within an RandomNumberProvider');
    }
    return context;
}

export const RandomNumbersProvider = ({ children }: { children: React.ReactNode }) => {
    const [numbers, setRandomNumbers] = useState<number[]>([]);
    const addRandomNumber = (number: number) => {
        setRandomNumbers(prev => [...prev, number]);
    }
    return (
        <NumberContext.Provider value={{ numbers, addRandomNumber }}>
            {children}
        </NumberContext.Provider>
    );
};
