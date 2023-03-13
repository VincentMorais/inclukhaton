import * as mongoose from 'mongoose';
export declare const propositionsChosenCount: (idProposition: string, idTeam: string) => ({
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
} | {
    $match: {
        userAnswer: mongoose.Types.ObjectId;
    };
})[];
