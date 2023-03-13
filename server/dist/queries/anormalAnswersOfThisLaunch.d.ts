import * as mongoose from 'mongoose';
export declare const anormalAnswersOfThisLaunch: (idLaunch: string, idTeam: string) => ({
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
} | {
    $match: {
        launchId: mongoose.Types.ObjectId;
    };
    $group?: undefined;
} | {
    $group: {
        _id: {
            userId: string;
            questionId: string;
        };
        items: {
            $sum: number;
        };
    };
    $match?: undefined;
} | {
    $match: {
        items: {
            $gt: number;
        };
    };
    $group?: undefined;
})[];
export declare const allAnswersOfThisLaunchWithoutCondition: (idLaunch: string, idTeam: string) => ({
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
} | {
    $match: {
        launchId: mongoose.Types.ObjectId;
    };
})[];
