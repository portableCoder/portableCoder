export default function getStringPercentage(inputString: string, percentage: number): string {
    if (percentage < 0 || percentage > 100) {
        throw new Error('Percentage should be between 0 and 100');
    }

    const stringLength = inputString.length;
    const charactersToReturn = Math.floor((percentage / 100) * stringLength);
    return inputString.slice(0, charactersToReturn);
};
