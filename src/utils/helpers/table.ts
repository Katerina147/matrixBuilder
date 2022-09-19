export const getTableHeadings = (columns: string | number): string[] => {
    const headings = new Array(columns)
        .fill(0)
        .map((_item, index) => `${index + 1}`);

    return ['№', ...headings, 'Sum'];
};

export const calculatePercent = (amount: number, rowSum: number) =>
    Math.round((amount * 100) / rowSum);
