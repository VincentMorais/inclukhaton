export declare const lookupUserFromUT: ({
    $lookup: {
        from: string;
        localField: string;
        foreignField: string;
        as: string;
    };
    $unwind?: undefined;
} | {
    $unwind: string;
    $lookup?: undefined;
})[];
export declare const countRows: {
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
}[];
